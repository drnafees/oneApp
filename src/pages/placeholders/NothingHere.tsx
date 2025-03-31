import { PackageOpen } from "lucide-react";

export default function NothingHere() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <PackageOpen className="w-16 h-16 text-black" />
            <h1 className="font-extrabold text-3xl mt-6 mb-2 text-gray-800">
                Nothing to see here!
            </h1>
            <p className="text-gray-600 text-lg">
                It seems like this page is empty.
            </p>
        </div>
    );
}