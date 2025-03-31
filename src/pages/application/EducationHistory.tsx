import React, { useState } from 'react'
import { Button } from "@/components/ui/button.tsx"
import {Degree} from "@/types/degree.tsx";
import {SingleEducationForm} from "@/pages/application/SingleEducationForm.tsx";
import {getAuth} from "firebase/auth";
import fireApp from "../../../firebase.tsx";
import {userStore} from "@/store/user.tsx";
import {useToast} from "@/functions/use-toast.ts";
import {useStore} from "zustand/index";

export default function EducationHistory() {
    const auth = getAuth(fireApp);
    const {user, updateUser} = useStore(userStore, (state:any) => state);
    const [degrees, setDegrees] = useState<Degree[]>(user.education || []);
    const {toast} = useToast();

    const addDegree = () => {
        setDegrees([...degrees, {
            name: '',
            level: '',
            university: '',
            graduationDate: '',
            gpa: '',
            honors: ''
        }])
    }

    const updateDegree = (index: number, updatedDegree: Degree) => {
        const newDegrees = [...degrees]
        newDegrees[index] = updatedDegree
        setDegrees(newDegrees)
    }

    const removeDegree = (index: number) => {
        setDegrees(degrees.filter((_, i) => i !== index))
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const {success, message} = await updateUser(auth.currentUser?.uid, {education:degrees});
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
        {degrees.map((degree, index) => (
            <SingleEducationForm
                key={index}
                degree={degree}
                onUpdate={(updatedDegree) => updateDegree(index, updatedDegree)}
                onRemove={() => removeDegree(index)}
            />
        ))}
        <Button type="button" variant="outline" onClick={addDegree}>Add Degree</Button>
        <Button type="submit" className="w-full">Save</Button>
      </form>
    )
}