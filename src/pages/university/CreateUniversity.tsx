import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

function CreateUniversity() {
    const [uid, setUid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [established, setEstablished] = useState(0);
    const [ranking, setRanking] = useState(0);
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");
    const [programs, setPrograms] = useState("");
    const [requirements, setRequirements] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const programsArray = programs.split(",").map((p) => p.trim()); // Convert comma-separated string to array.

        const universityData = {
            uid,
            name,
            email,
            established,
            ranking,
            image,
            phone,
            address,
            country,
            bio,
            programs: programsArray,
            requirements,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_HOST}/api/unis`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(universityData),
            });

            if (response.ok) {
                alert('University data submitted successfully!');
                setUid("");
                setName("");
                setEmail("");
                setEstablished(0);
                setRanking(0);
                setImage("");
                setPhone("");
                setAddress("");
                setCountry("");
                setBio("");
                setPrograms("");
                setRequirements("");
            } else {
                const errorData = await response.json();
                alert(`Error submitting data: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('An unexpected error occurred.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle>Add University</CardTitle>
                    <CardDescription>Fill in the university details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="uid">UID</Label>
                                <Input type="text" id="uid" value={uid} onChange={(e) => setUid(e.target.value)} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="established">Year Established</Label>
                                <Input type="number" max="2100" id="established" value={established} onChange={(e) => setEstablished(Number(e.target.value))} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="ranking">Ranking</Label>
                                <Input type="number" id="ranking" value={ranking} onChange={(e) => setRanking(Number(e.target.value))} required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="image">Image URL</Label>
                                <Input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="address">Address</Label>
                                <Input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="country">Country</Label>
                                <Input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="programs">Programs (comma-separated)</Label>
                                <Input type="text" id="programs" value={programs} onChange={(e) => setPrograms(e.target.value)} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="requirements">Requirements</Label>
                                <Textarea id="requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} />
                            </div>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default CreateUniversity;