import { Button } from "@/components/ui/button.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import fireApp from "../../../firebase.tsx";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useToast } from "@/functions/use-toast.ts"
import {Loader2} from "lucide-react";
import {userStore} from "@/store/user.tsx";
import {useStore} from "zustand/react";

export function RegisterForm() {
    const auth = getAuth(fireApp);
    const [newUser, setUser] = useState({
        uid:"",
        fullName: "",
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const createUser = useStore(userStore, (state:any) => state.createUser);
    const {toast} = useToast();

    const handleSignUp = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsLoading(true);

        //Create user with firebase
        await createUserWithEmailAndPassword(auth, newUser.email, newUser.password).then((userCredential) => {
            if (userCredential) {
                updateProfile(userCredential.user,{
                    displayName: newUser.fullName
                });
                //Add user to dynamoDB
                createUser({
                    uid: auth.currentUser?.uid,
                    name: newUser.fullName,
                    email: newUser.email,
                });
                toast({
                    title: "Account created successfully",
                });
            }
        }).catch((error) => {
            toast({
                variant: "destructive",
                title: "Failed to create a new account",
                description: `${error.message}`,
            })
        }).finally(()=>{
            setIsLoading(false);
        });
    };


    return (
        <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        required
                        value={newUser.email}
                        onChange={(e)=>setUser({...newUser, email: e.target.value})}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="fullName">Name</Label>
                    <Input
                        id="fullName"
                        type="fullName"
                        placeholder="Enter your full name"
                        required
                        value={newUser.fullName}
                        onChange={(e)=>setUser({...newUser, fullName: e.target.value})}
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        required
                        value={newUser.password}
                        onChange={(e)=>setUser({...newUser, password: e.target.value})}
                    />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading? <><Loader2 className="animate-spin" /> Registering...</>:"Register"}
                </Button>

            </div>
        </form>
    )
}
