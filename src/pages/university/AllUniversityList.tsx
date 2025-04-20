import { useState } from "react"
import {Search, MapPin, X} from "lucide-react"
import { Input } from "@/components/ui/input.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { Badge } from "@/components/ui/badge.tsx"
import { Checkbox } from "@/components/ui/checkbox.tsx"
import placeholder from "/src/assets/blank_university.png"

// Mock data
const allUniversityList = [
    {
        id: 1,
        name: "Harvard University",
        location: "United States",
        description: "Private Ivy League research university in Cambridge, Massachusetts.",
        established: 1636,
        students: 23000,
        ranking: 1,
        website: "harvard.edu",
        image: "",
        tags: ["Ivy League", "Research"],
    },
    {
        id: 2,
        name: "University of Oxford",
        location: "United Kingdom",
        description: "Collegiate research university in Oxford, England.",
        established: 1096,
        students: 24000,
        ranking: 2,
        website: "ox.ac.uk",
        image: "",
        tags: ["Research", "Historic"],
    },
    {
        id: 3,
        name: "Stanford University",
        location: "United States",
        description: "Private research university in Stanford, California.",
        established: 1885,
        students: 16000,
        ranking: 3,
        website: "stanford.edu",
        image: "",
        tags: ["Research", "Technology"],
    },
    {
        id: 4,
        name: "University of Tokyo",
        location: "Japan",
        description: "Public research university in Tokyo, Japan.",
        established: 1877,
        students: 28000,
        ranking: 4,
        website: "u-tokyo.ac.jp",
        image: "",
        tags: ["Research", "Public"],
    },
    {
        id: 5,
        name: "ETH Zurich",
        location: "Switzerland",
        description: "Public research university in Zürich, Switzerland.",
        established: 1854,
        students: 21000,
        ranking: 5,
        website: "ethz.ch",
        image: "",
        tags: ["Technical", "Research"],
    },
    {
        id: 6,
        name: "University of Toronto",
        location: "Canada",
        description: "Public research university in Toronto, Ontario, Canada.",
        established: 1827,
        students: 93000,
        ranking: 6,
        website: "utoronto.ca",
        image: "",
        tags: ["Research", "Public"],
    },
    {
        id: 7,
        name: "National University of Singapore",
        location: "Singapore",
        description: "Public research university in Singapore.",
        established: 1905,
        students: 38000,
        ranking: 7,
        website: "nus.edu.sg",
        image: "",
        tags: ["Research", "Public"],
    },
    {
        id: 8,
        name: "Tsinghua University",
        location: "China",
        description: "Public research university in Beijing, China.",
        established: 1911,
        students: 36000,
        ranking: 8,
        website: "tsinghua.edu.cn",
        image: "",
        tags: ["Research", "Technical"],
    },
    {
        id: 9,
        name: "University of Melbourne",
        location: "Australia",
        description: "Public research university in Melbourne, Australia.",
        established: 1853,
        students: 52000,
        ranking: 9,
        website: "unimelb.edu.au",
        image: "",
        tags: ["Research", "Public"],
    },
    {
        id: 10,
        name: "University of Cape Town",
        location: "South Africa",
        description: "Public research university in Cape Town, South Africa.",
        established: 1829,
        students: 29000,
        ranking: 10,
        website: "uct.ac.za",
        image: "",
        tags: ["Research", "Public"],
    },
    {
        id: 11,
        name: "University of São Paulo",
        location: "Brazil",
        description: "Public research university in São Paulo, Brazil.",
        established: 1934,
        students: 95000,
        ranking: 11,
        website: "usp.br",
        image: "",
        tags: ["Research", "Public"],
    },
    {
        id: 12,
        name: "Ludwig Maximilian University of Munich",
        location: "Germany",
        description: "Public research university in Munich, Germany.",
        established: 1472,
        students: 52000,
        ranking: 12,
        website: "lmu.de",
        image: "",
        tags: ["Research", "Historic"],
    },
]


const locations = Array.from(new Set(allUniversityList.map((uni) => uni.location)))

export default function AllUniversityList() {
    const [searchQuery, setSearchQuery] = useState("")
    const [locationFilter, setLocationFilter] = useState("")
    const [selectedUniversities, setSelectedUniversities] = useState<number[]>([])

    const toggleUniversitySelection = (id: number) => {
        setSelectedUniversities((prev) => (prev.includes(id) ? prev.filter((uniId) => uniId !== id) : [...prev, id]))
    }

    const filteredUniversities = allUniversityList.filter((university) => {
        const matchesSearch =
            university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            university.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesLocation = locationFilter === "" || university.location === locationFilter

        return matchesSearch && matchesLocation
    })

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Apply to Partner Universities</h1>

            <Card className="mb-8 p-6 rounded-lg">
                <div className="grid gap-4 md:grid-cols-[1fr_auto] mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                        <Input
                            type="text"
                            placeholder="Search universities"
                            className="pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Select value={locationFilter} onValueChange={setLocationFilter}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filter by location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            {locations.map((location) => (
                                <SelectItem key={location} value={location}>
                                    {location}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-sm">
                        Showing {filteredUniversities.length} of {allUniversityList.length} universities
                    </p>
                    {locationFilter && (
                        <Button variant="outline" size="sm" onClick={() => setLocationFilter("")} className="text-xs">
                            Clear Filter
                        </Button>
                    )}
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUniversities.map((university) => (
                    <Card key={university.id} className="overflow-hidden flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <img
                                src={university.image || placeholder}
                                alt={`${university.name} logo`}
                                className="h-12 w-12 rounded-md object-contain p-1"
                            />
                            <div>
                                <CardTitle className="text-xl">{university.name}</CardTitle>
                                <div className="flex items-center text-sm mt-1">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {university.location}
                                </div>
                            </div>
                        </CardHeader>
                        <div className="flex-grow">
                            <CardContent>
                                <p className="text-sm mb-2">{university.description}</p>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {university.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                        <CardFooter className="flex justify-between border-t pt-4 text-sm">
                            <div className="flex items-center">
                                <Checkbox
                                    id={`select-${university.id}`}
                                    checked={selectedUniversities.includes(university.id)}
                                    onCheckedChange={() => toggleUniversitySelection(university.id)}
                                    className="mr-2"
                                />
                                <label htmlFor={`select-${university.id}`} className="text-sm cursor-pointer">
                                    Select
                                </label>
                            </div>
                            <div className="font-medium">Ranking: #{university.ranking}</div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredUniversities.length === 0 && (
                <div className="text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No universities found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
            )}

            {selectedUniversities.length > 0 && (
                <div className="fixed animate-in slide-in-from-bottom duration-300 bottom-4 left-1/2 w-full md:w-1/2 bg-background border rounded-lg shadow-lg p-4 flex justify-between items-center z-50 -ml-[25%]">
                    <Button onClick={()=>setSelectedUniversities([])}><X /></Button>
                    <div className="font-medium">
                        {selectedUniversities.length} {selectedUniversities.length === 1 ? "university" : "universities"} selected
                    </div>
                    <Button onClick={()=>alert("Application Sent!")}>Apply</Button>
                </div>
            )}
        </div>
    )
}

