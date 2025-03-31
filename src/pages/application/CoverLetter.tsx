import {Textarea} from "@/components/ui/textarea.tsx";
import React, { useState } from "react";
import {userStore} from "@/store/user.tsx";
import {getAuth} from "firebase/auth";
import fireApp from "../../../firebase.tsx";
import {useToast} from "@/functions/use-toast.ts";
import {Button} from "@/components/ui/button.tsx";
import { useStore } from "zustand";

export default function CoverLetter(){
    const auth = getAuth(fireApp);
    const {user, updateUser} = useStore(userStore, (state:any) => state);
    const {toast} = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const {success, message} = await updateUser(auth.currentUser?.uid, {coverLetter: coverLetter});
        if (success) {
            toast({
                title: "Success",
                description: message,
            });
            return;
        } else {
            toast({
                variant: "destructive",
                title: "Error updating information",
                description: message
            });
        }
    }

    const [coverLetter, setCoverLetter] = useState(user.coverLetter);
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea id="address" name="address"
                      rows={10}
                      placeholder="Write your cover letter here"
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      required/>
            <Button type="submit" className="w-full">Save</Button>
        </form>
    );
}