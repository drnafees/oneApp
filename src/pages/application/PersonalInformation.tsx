import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import React, {useState} from "react";
import { useToast } from "@/functions/use-toast.ts";
import {userStore} from "@/store/user.tsx";
import {getAuth} from "firebase/auth";
import fireApp from "../../../firebase.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useStore} from "zustand/react";

export default function PersonalInformation() {
    const auth = getAuth(fireApp);
    const {user, updateUser} = useStore(userStore, (state:any) => state);

    const [userInfo, setUserInfo] = useState({
        name: user.name,
        bio: user.bio,
        profession: user.profession,
        phone: user.phone,
        address: user.address,
        citizenship: user.citizenship,
        dateOfBirth: user.dateOfBirth,
    })
    const {toast} = useToast();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const {success, message} = await updateUser(auth.currentUser?.uid,userInfo);
        if (!success) {
            toast({
                variant: "destructive",
                title: "Error updating information",
                description: message
            });
        } else {
            toast({
                title: "Success",
                description: message,
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name"
                       value={userInfo.name}
                       onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                       required/>
            </div>
            <div>
                <Label htmlFor="profession">Profession</Label>
                <Input id="profession" name="profession"
                       value={userInfo.profession}
                       onChange={(e) => setUserInfo({...userInfo, profession: e.target.value})}
                       required/>
            </div>
            <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel"
                       value={userInfo.phone}
                       onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                       required/>
            </div>
            <div>
                <Label htmlFor="bio">Personal Statement</Label>
                <Textarea id="bio" name="bio"
                          value={userInfo.bio}
                          onChange={(e) => setUserInfo({...userInfo, bio: e.target.value})}
                          required/>
            </div>
            <div>
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" name="address"
                          value={userInfo.address}
                          onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                          required/>
            </div>
            <div>
                <Label htmlFor="citienship">Citizenship</Label>
                <Input id="citizenship" name="citizenship"
                       value={userInfo.citizenship}
                       onChange={(e) => setUserInfo({...userInfo, citizenship: e.target.value})}
                       required/>
            </div>
            <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" name="dateOfBirth" type="date"
                       value={userInfo.dateOfBirth}
                       onChange={(e) => setUserInfo({...userInfo, dateOfBirth: e.target.value})}
                       required/>
            </div>
            <Button type="submit" className="w-full">Save</Button>
        </form>
)
}

