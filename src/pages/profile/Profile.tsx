import ProfileHeader from "@/pages/profile/ProfileHeader.tsx";
import ProfileBio from "@/pages/profile/ProfileBio.tsx";
import ProfileEducation from "@/pages/profile/ProfileEducation.tsx";
import ProfileExperience from "@/pages/profile/ProfileExperience.tsx";
import {userStore} from "@/store/user.tsx";
import {useStore} from "zustand/react";

export default function ProfilePage() {
    const {user, updateUser} = useStore(userStore, (state:any) => state);
    return (
        <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <ProfileHeader user={user} updateUser={updateUser} />
                <div className="p-6 space-y-6">
                    <ProfileBio user={user}  />
                    <ProfileEducation user={user}  />
                    <ProfileExperience user={user}  />
                </div>
            </div>
        </main>
    )
}

