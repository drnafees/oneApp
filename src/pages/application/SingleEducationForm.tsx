import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx"
import { Degree } from '@/types/degree.tsx'
import React from "react";

interface DegreeFormProps {
    degree: Degree
    onUpdate: (degree: Degree) => void
    onRemove: () => void
}

export function SingleEducationForm({ degree, onUpdate, onRemove }: DegreeFormProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        onUpdate({ ...degree, [name]: value })
    }

    return (
        <Card>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name of Degree</Label>
                        <Input id="name" name="name" value={degree.name} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="level">Level of Degree</Label>
                        <Input id="level" name="level" value={degree.level} onChange={handleInputChange} required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="university">University/College Name</Label>
                    <Input id="university" name="university" value={degree.university} onChange={handleInputChange} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="graduationDate">Graduation Date</Label>
                        <Input id="graduationDate" name="graduationDate" type="date" value={degree.graduationDate} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gpa">GPA</Label>
                        <Input id="gpa" name="gpa" type="number" step="0.01" min="0" max="4" value={degree.gpa} onChange={handleInputChange} required />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="honors">Academic Honors or Awards</Label>
                    <Input id="honors" name="honors" value={degree.honors} onChange={handleInputChange} />
                </div>
            </CardContent>
            <CardFooter>
                <Button type="button" variant="destructive" onClick={onRemove}>Remove Degree</Button>
            </CardFooter>
        </Card>
    )
}

