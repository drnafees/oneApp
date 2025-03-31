import {userStore} from "@/store/user";
import {useEffect, useState} from "react";
import {getAuth} from "firebase/auth";
import fireApp from "../../firebase.tsx";
import {useStore} from "zustand/react";

export const useInitUser = () => {
    const [loading, setLoading] = useState(true);
    const getUser = useStore(userStore, (state:any) => state.getUser);
    const auth = getAuth(fireApp);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    await getUser(user.uid);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
                setLoading(false);
            }
        });
        return ()=> unsubscribe();
    }, [getUser]);
    return loading;
}