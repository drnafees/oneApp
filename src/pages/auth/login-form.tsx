import { Button } from "@/components/ui/button.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import fireApp from "../../../firebase.tsx";
import {useState} from "react";
import {useToast} from "@/functions/use-toast.ts";
import {Loader2} from "lucide-react";

export function LoginForm() {

    const auth = getAuth(fireApp);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {toast} = useToast();

    const handleSignIn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevent default form submission behavior
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error:any) {
            toast({
                variant: "destructive",
                title: "Failed to sign in. Please try again.",
                description: `${error.message}`,
            })
        } finally {
            setIsLoading(false);
        }
    };

    const forgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("If your account exists, we've sent you a password reset email.");
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error sending password reset email. Please try again.",
                description: `${error}`,
            })
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            onClick={forgotPassword}
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading? <><Loader2 className="animate-spin" /> Please wait</>:"Sign in"}
                </Button>
            </div>
        </form>
    )
}
