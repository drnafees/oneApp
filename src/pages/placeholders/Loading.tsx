import { Loader2 } from "lucide-react"

export default function LoadingPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white">
            <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">OneApp</h1>
                </div>
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading...</p>
            </div>
        </div>
    )
}