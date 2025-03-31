import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import {User} from "@/types/user.tsx";

export default function ProfileExperience({user}: {user: User}) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
                {user.experience? (user.experience?.map((exp, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold">{exp.companyName}</h3>
                        <p>{exp.jobTitle}</p>
                        <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</p>
                    </div>
                ))) : (<p>No work history</p>)}
            </CardContent>
        </Card>
    )
}

