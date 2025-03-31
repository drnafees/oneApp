import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Upload } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import fireApp from "../../../firebase.tsx";
import { getAuth } from "firebase/auth"
import {useToast} from "@/functions/use-toast.ts";
import uploadFiles from "@/functions/uploadFiles.tsx";
import {useStore} from "zustand/index";
import {userStore} from "@/store/user.tsx";

interface Files {
    transcript: FileList | null;
    experience: FileList | null;
    recommendationLetter: FileList | null;
    additionalDocuments: FileList | null;
}

const initialFilesState: Files = {
    transcript: null,
    experience: null,
    recommendationLetter: null,
    additionalDocuments: null,
};

export default function DocumentsUpload() {
    const auth = getAuth(fireApp);
    const {updateUser} = useStore(userStore, (state:any) => state);
    const {toast} = useToast();
    const [files, setFiles] = useState<Files>(initialFilesState);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files: selectedFiles } = e.target;
        setFiles((prevFiles) => ({ ...prevFiles, [name]: selectedFiles }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setUploading(true);

        const formData = new FormData();

        if (auth.currentUser!=null) {
            formData.append("uid", auth.currentUser.uid);

            const fileKeys: (keyof Files)[] = ["transcript", "experience", "recommendationLetter", "additionalDocuments"];
            for (const key of fileKeys) {
                const fileList = files[key];
                if (fileList) {
                    for (let i = 0; i < fileList.length; i++) {
                        formData.append(key, fileList[i]);
                    }
                }
            }

            const result = await uploadFiles(formData);

            if (result.status) {
                toast({
                    title: result.title,
                })
                await updateUser(auth.currentUser.uid, {documents: true});
                setFiles(initialFilesState);
                (e.target as HTMLFormElement).reset();
            } else {
                toast({
                    variant: "destructive",
                    title: result.title,
                    description: result.message
                })
            }
        }
        setUploading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p>Limit: Please select no more than 5 documents per category.</p>
            <div>
                <Label htmlFor="transcript">Educational Transcripts</Label>
                <Input
                    id="transcript"
                    name="transcript"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <div>
                <Label htmlFor="experience">Proof of Work Experience</Label>
                <Input
                    id="experience"
                    name="experience"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <div>
                <Label htmlFor="recommendationLetter">Recommendation Letters</Label>
                <Input
                    id="recommendationLetter"
                    name="recommendationLetter"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <div>
                <Label htmlFor="additionalDocuments">Additional Documents</Label>
                <Input
                    id="additionalDocuments"
                    name="additionalDocuments"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                />
            </div>
            <Button type="submit" className="w-full" disabled={uploading}>
                <Upload className={uploading ? "animate-spin" : ""} />
                {uploading ? "Uploading..." : "Submit"}
            </Button>
        </form>
    );
}