import { Button } from "@/components/ui/button.tsx";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";

export default function ApplicationLayout() {
    const path = useLocation().pathname;
    const [content, setContent] = useState({
        name:"",
        prev:"",
        next:""
    });
    useEffect(() => {
        const page = path.substring(path.lastIndexOf("/") + 1);
        switch (page) {
            case "personal":
                setContent({name:"Personal Information", prev:"", next:"education"});
                break;
            case "education":
                setContent({name:"Education History", prev:"personal", next:"experience"});
                break;
            case "experience":
                setContent({name:"Work Experience", prev:"education", next:"letter"});
                break;
            case "letter":
                setContent({name:"Cover Letter", prev:"experience", next:"documents"});
                break;
            case "documents":
                setContent({name:"Upload Documents", prev:"letter", next:""});
                break;
            default:
                setContent({name:"", prev:"", next:""});
                break;
        }
    }, [path])
    return(
        <Card className="w-full max-w-3xl mx-auto">
            {content.name &&
            <CardHeader>
                <CardTitle>{content.name}</CardTitle>
            </CardHeader>}
            <CardContent className="space-y-4">
                <Outlet/>
            </CardContent>
            {content.name &&
            <CardFooter className="flex justify-between items-center">
                {content.prev && <Link to={content.prev}><Button><ArrowLeft/>Previous</Button></Link>}
                {content.next && <Link to={content.next}><Button>Next<ArrowRight/></Button></Link>}
            </CardFooter>}
        </Card>
    );
}