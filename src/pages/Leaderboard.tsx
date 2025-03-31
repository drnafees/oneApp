import { useState } from "react"
import { Medal, Palette, Wrench, Stethoscope, FlaskRoundIcon as Flask, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

// Mock data
const streams = [
    {
        id: "arts",
        name: "Arts & Humanities",
        icon: Palette,
        users: [
            { id: 1, name: "Emma Thompson", points: 985, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 2, name: "James Wilson", points: 940, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 3, name: "Olivia Parker", points: 915, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 4, name: "William Davis", points: 880, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 5, name: "Sophia Martinez", points: 845, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 6, name: "Benjamin Lee", points: 820, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 7, name: "Charlotte Brown", points: 790, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 8, name: "Daniel Taylor", points: 765, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 9, name: "Amelia Johnson", points: 740, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 10, name: "Henry Garcia", points: 720, avatar: "/placeholder.svg?height=40&width=40" },
        ],
    },
    {
        id: "engineering",
        name: "Engineering and Technology",
        icon: Wrench,
        users: [
            { id: 1, name: "Liam Chen", points: 990, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 2, name: "Ava Rodriguez", points: 965, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 3, name: "Noah Kim", points: 930, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 4, name: "Isabella Patel", points: 895, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 5, name: "Ethan Nguyen", points: 860, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 6, name: "Mia Sharma", points: 830, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 7, name: "Lucas Wang", points: 805, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 8, name: "Harper Singh", points: 780, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 9, name: "Alexander Zhang", points: 755, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 10, name: "Evelyn Gupta", points: 730, avatar: "/placeholder.svg?height=40&width=40" },
        ],
    },
    {
        id: "medicine",
        name: "Life Sciences & Medicine",
        icon: Stethoscope,
        users: [
            { id: 1, name: "Mason Hernandez", points: 995, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 2, name: "Abigail Lopez", points: 970, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 3, name: "Jacob Gonzalez", points: 945, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 4, name: "Elizabeth Perez", points: 910, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 5, name: "Michael Torres", points: 875, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 6, name: "Emily Sanchez", points: 840, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 7, name: "Elijah Ramirez", points: 815, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 8, name: "Scarlett Flores", points: 785, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 9, name: "Matthew Rivera", points: 760, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 10, name: "Avery Diaz", points: 735, avatar: "/placeholder.svg?height=40&width=40" },
        ],
    },
    {
        id: "sciences",
        name: "Natural Sciences",
        icon: Flask,
        users: [
            { id: 1, name: "Victoria Adams", points: 998, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 2, name: "Samuel Wright", points: 975, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 3, name: "Grace Nelson", points: 950, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 4, name: "Joseph Hill", points: 925, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 5, name: "Chloe Baker", points: 890, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 6, name: "David Carter", points: 855, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 7, name: "Zoe Mitchell", points: 825, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 8, name: "Christopher Turner", points: 795, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 9, name: "Lily Phillips", points: 770, avatar: "/placeholder.svg?height=40&width=40" },
            { id: 10, name: "Andrew Campbell", points: 745, avatar: "/placeholder.svg?height=40&width=40" },
        ],
    },
]

export default function LeaderboardPage() {
    const [activeStream, setActiveStream] = useState("arts")

    const currentStream = streams.find((stream) => stream.id === activeStream) || streams[0]
    const CurrentIcon = currentStream.icon

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Academic Leaderboard</h1>

            <div className="flex justify-center mb-8">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full max-w-md flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <CurrentIcon className="h-5 w-5" />
                                <span>{currentStream.name}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full min-w-[240px]">
                        {streams.map((stream) => {
                            const Icon = stream.icon
                            return (
                                <DropdownMenuItem
                                    key={stream.id}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setActiveStream(stream.id)}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{stream.name}</span>
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {streams.map((stream) => (
                <div key={stream.id} className={activeStream === stream.id ? "block" : "hidden"}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl">{stream.name} Top 10</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {stream.users.map((user, index) => (
                                    <div
                                        key={user.id}
                                        className={`flex items-center justify-between p-3 rounded-lg ${
                                            index === 0
                                                ? "bg-amber-50 border border-amber-200"
                                                : index === 1
                                                    ? "bg-slate-50 border border-slate-200"
                                                    : index === 2
                                                        ? "bg-orange-50 border border-orange-200"
                                                        : "bg-background border border-border"
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-8 text-center font-semibold">
                                                {index === 0 ? (
                                                    <Medal className="h-6 w-6 text-amber-500 mx-auto" />
                                                ) : index === 1 ? (
                                                    <Medal className="h-6 w-6 text-slate-400 mx-auto" />
                                                ) : index === 2 ? (
                                                    <Medal className="h-6 w-6 text-orange-600 mx-auto" />
                                                ) : (
                                                    <span className="text-muted-foreground">{index + 1}</span>
                                                )}
                                            </div>
                                            <Avatar className="h-10 w-10 border">
                                                <AvatarImage src={user.avatar} alt={user.name} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                            </div>
                                        </div>
                                        <div className="font-semibold">{user.points.toLocaleString()} pts</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    )
}

