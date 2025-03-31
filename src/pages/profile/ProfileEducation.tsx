import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import {User} from "@/types/user.tsx";

export default function ProfileEducation({user}: {user: User}) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Education</CardTitle>
            </CardHeader>
            <CardContent>
                {user.experience? (
                    user.education?.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold">{edu.name}</h3>
                        <p>{edu.level}</p>
                        <p className="text-sm text-gray-500">{edu.graduationDate}</p>
                    </div>
                    ))) : (<p>No education history</p>)}
            </CardContent>
        </Card>
    )
}

