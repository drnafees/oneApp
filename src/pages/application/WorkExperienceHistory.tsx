import React, { useState } from 'react'
import { Button } from "@/components/ui/button.tsx"
import {WorkExperience} from "@/types/work.tsx";
import {SingleWorkForm} from "@/pages/application/SingleWorkForm.tsx";
import {getAuth} from "firebase/auth";
import fireApp from "../../../firebase.tsx";
import {userStore} from "@/store/user.tsx";
import {useToast} from "@/functions/use-toast.ts";
import {useStore} from "zustand/react";

export default function WorkExperienceHistory() {
    const auth = getAuth(fireApp);
    const {user, updateUser} = useStore(userStore, (state:any) => state);
    const [work, setWork] = useState<WorkExperience[]>(user.experience || []);
    const {toast} = useToast();

    const addWork = () => {
        setWork([...work, {
            companyName: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            responsibilities: '',
            location: ''
        }])
    }

    const updateWork = (index: number, updatedWork: WorkExperience) => {
        const newWorks = [...work]
        newWorks[index] = updatedWork
        setWork(newWorks)
    }

    const removeWork = (index: number) => {
        setWork(work.filter((_, i) => i !== index))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const {success, message} = await updateUser(auth.currentUser?.uid, {experience:work});
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
            {work.map((work, index) => (
                <SingleWorkForm
                    key={index}
                    work={work}
                    onUpdate={(updatedWork) => updateWork(index, updatedWork)}
                    onRemove={() => removeWork(index)}
                />
            ))}
            <Button type="button" variant="outline" onClick={addWork}>Add Experience</Button>
            <Button type="submit" className="w-full">Save</Button>
        </form>
    )
}