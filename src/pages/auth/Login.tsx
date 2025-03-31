import { useState } from 'react'
import { Button } from "@/components/ui/button.tsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { LoginForm } from "@/pages/auth/login-form.tsx";
import { RegisterForm } from "@/pages/auth/register-form.tsx";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from '@/functions/use-toast.ts';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {useStore} from "zustand/react";
import {userStore} from "@/store/user.tsx";

export default function AuthPage() {

    const [isLogin, setIsLogin] = useState(true)
    const toggleForm = () => setIsLogin(!isLogin)
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const createUser = useStore(userStore, (state:any) => state.createUser);

    const googleSignIn = async () => {
        await signInWithPopup(auth, provider).then((userCredential) => {
            //Add user to dynamoDB
            createUser({
                uid: auth.currentUser?.uid,
                name: userCredential.user.displayName,
                email: userCredential.user.email,
                image: userCredential.user.photoURL
            });
            toast({
                title: "Account created successfully",
            })
        }).catch(error => {
            toast({
                variant: "destructive",
                title: "Failed to sign in. Please try again.",
                description: `${error.message}`,
            })
        });
    };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card className="flex-grow">
                        <CardHeader className="w-96">
                            <CardTitle className="text-2xl">{isLogin ? 'Login' : 'Sign Up'}</CardTitle>
                            <CardDescription>
                                {isLogin
                                    ? 'Enter your credentials to access your account'
                                    : 'Create a new account to get started'
                                }
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isLogin ? <LoginForm/> : <RegisterForm/>}
                            <br/>
                            <Button variant="outline" className="w-full" onClick={googleSignIn}>
                                <FontAwesomeIcon icon={faGoogle} /> Login with Google
                            </Button>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            {isLogin ? (
                                <Button variant="link" onClick={toggleForm}>
                                    Don't have an account? Sign up
                                </Button>
                            ) : (
                                <Button variant="ghost" onClick={toggleForm}>
                                    Back to Login
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
    }


