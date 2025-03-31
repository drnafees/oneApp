import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import {User} from "@/types/user.tsx";

export default function ProfileBio({user}: {user: User}) {

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">About</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{!!user.bio? user.bio: "No bio"}</p>
            </CardContent>
        </Card>
    )
}

