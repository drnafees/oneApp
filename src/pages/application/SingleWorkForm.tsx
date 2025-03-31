import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx"
import { WorkExperience } from '@/types/work.tsx'
import React from "react";

interface WorkFromProps {
    work: WorkExperience
    onUpdate: (work: WorkExperience) => void
    onRemove: () => void
}

export function SingleWorkForm({ work, onUpdate, onRemove }: WorkFromProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        onUpdate({ ...work, [name]: value })
    }

    return (
        <Card>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Name of Company</Label>
                        <Input id="companyName" name="companyName" value={work.companyName} onChange={handleInputChange}
                               required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input id="jobTitle" name="jobTitle" value={work.jobTitle} onChange={handleInputChange}
                               required/>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="responsibilities">Responsibilities</Label>
                    <Input id="responsibilities" name="responsibilities" value={work.responsibilities}
                           onChange={handleInputChange} required/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input id="endDate" name="endDate" type="date" value={work.endDate} onChange={handleInputChange}
                               required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input id="startDate" name="startDate" type="date" value={work.startDate}
                               onChange={handleInputChange} required/>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" value={work.location} onChange={handleInputChange}/>
                </div>
            </CardContent>
            <CardFooter>
                <Button type="button" variant="destructive" onClick={onRemove}>Remove Experience</Button>
            </CardFooter>
        </Card>
    )
}

