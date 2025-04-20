import {Button} from "@/components/ui/button.tsx";
import {Pencil} from 'lucide-react';
import {useToast} from "@/functions/use-toast.ts";
import {getAuth} from "firebase/auth";
import fireApp from "../../../firebase.tsx";
import uploadFiles from "@/functions/uploadFiles.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ChangeEvent, useRef} from "react";


export default function ProfileHeader({user, updateUser}:any) {

    const auth = getAuth(fireApp);
    const {toast} = useToast();
    const formData = new FormData();
    const inputRef = useRef<HTMLInputElement>(null);
    const handleUpload = async (e:ChangeEvent<HTMLInputElement>) => {
        if (auth.currentUser&&e.target.files) {
            formData.append("uid", auth.currentUser.uid);
            formData.append("image", e.target.files[0]);
            const result = await uploadFiles(formData);
            if (result.status) {
                toast({
                    title: result.title,
                })
                updateUser(user.uid, {image:`${import.meta.env.VITE_HOST}/uploads/${user.uid}/image.jpg`});
                window.location.reload();
            } else {
                toast({
                    variant: "destructive",
                    title: result.title,
                    description: result.message
                })
            }
        }
    }
    function openPicker() {
        if(inputRef.current) {
            inputRef.current.click();
        }
    }

    return (
        <div className="relative">
            <div className="h-32 bg-gray-300 overflow-hidden">
                <img
                    src={user.image}
                    alt="Cover image"
                    className="w-full h-full object-cover blur-lg filter"
                />
            </div>
            <div className="absolute top-16 left-6 flex items-end space-x-4">
                <div className="relative">
                    <img
                        src={user.image}
                        alt="Profile picture"
                        className="w-32 h-32 rounded-full border-4 border-white"
                    />
                    <Input
                        id="image"
                        name="image"
                        ref={inputRef}
                        type="file"
                        accept=".jpg"
                        multiple={false}
                        onChange={handleUpload}
                        className="hidden"
                    />
                    <Button size="icon" className="absolute bottom-0 right-0 rounded-full" variant="secondary" onClick={openPicker}>
                        <Pencil className="h-4 w-4"/>
                    </Button>
                </div>
                <div className="pt-4">
                    <h1 className="text-2xl font-bold">{!!user.name? user.name : "No Name"}</h1>
                    <p className="text-gray-600">{!!user.profession? user.profession : "No Profession"}</p>
                </div>
            </div>
            <div className="h-16"></div>
        </div>
    )
}

