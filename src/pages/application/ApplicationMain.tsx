import { Progress } from "@/components/ui/progress.tsx"
import { Button } from "@/components/ui/button.tsx"
import { CheckCircle, Circle } from "lucide-react"
import {Link, useLocation} from "react-router-dom";
import {useStore} from "zustand/react";
import {userStore} from "@/store/user.tsx";

export default function ApplicationMain() {

    const {user} = useStore(userStore, (state:any)=> state);

    const location = useLocation().pathname;
    const steps = [
        { name: "Profile", completed: (!!user.name&&!!user.phone&&!!user.profession&&!!user.address&&!!user.bio&&!!user.dateOfBirth&&!!user.citizenship), href: `${location}/personal` },
        { name: "Education", completed: (!!user.education?.length), href: `${location}/education` },
        { name: "Experience", completed: (!!user.experience?.length), href: `${location}/experience` },
        { name: "Cover Letter", completed: (!!user.coverLetter), href: `${location}/letter` },
        { name: "Upload Documents", completed: (user.documents), href: `${location}/documents` },
    ]
    const completedSteps = steps.filter((step) => step.completed).length
    const progress = (completedSteps / steps.length) * 100

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Application Checklist</h1>
            <div className="mb-8">
                <Progress value={progress} className="w-full h-4" />
                <p className="text-sm text-gray-600 mt-2">{progress.toFixed(0)}% Complete</p>
            </div>
            <ul className="space-y-4">
                {steps.map((step) => (
                    <li key={step.name} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
                        <div className="flex items-center space-x-3">
                            {step.completed ? (
                                <CheckCircle className="text-green-500 h-6 w-6" />
                            ) : (
                                <Circle className="text-gray-300 h-6 w-6" />
                            )}
                            <span className="font-medium">{step.name}</span>
                        </div>
                        {!step.completed && (
                            <Link to={step.href}>
                                <Button variant="outline">Complete</Button>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

