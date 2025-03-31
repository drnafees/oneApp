import { create } from "zustand";
import {User} from "@/types/user.tsx";

const emptyUser: User = {
    bio: "",
    image: "https://as1.ftcdn.net/jpg/02/33/46/24/220_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg",
    name: "",
    profession: "",
    uid:'',
};

export const userStore = create((set) => ({
    user: emptyUser,
    setUser: (user: User) => set({ user }),

    // Add a new user
    createUser: async (newUser:User) => {
        if (!newUser.uid) {
            return {
                success: false,
                message: "Invalid user id!",
            };
        }
        const res = await fetch(`${import.meta.env.VITE_HOST}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        const data = await res.json();
        if (res.ok) {
            set({user: data.data});
            return { success: true, message: "User created successfully" };
        } else {
            return { success: false, message: data.message };
        }
    },

    getUser: async (userId:string) => {
        const res = await fetch(`${import.meta.env.VITE_HOST}/api/users/${userId}`, {
            method: "GET",
        })
        const data = await res.json();
        if (res.ok) {
            set({user: data.data});
            return data;
        } else {
            return { success: false, message: data.message };
        }
    },

    // Update existing user
    updateUser: async (userId:string, updatedUser:User) => {
        const res = await fetch(`${import.meta.env.VITE_HOST}/api/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        });
        const data = await res.json();
        if (res.ok) {
            console.log({...data.data, ...updatedUser});
            set({user: {...data.data, ...updatedUser}});
            return { success: true, message: "User updated successfully" };
        } else {
            return { success: false, message: data.message };
        }
    },

    // Delete a user
    deleteUser: async (userId:string) => {
        const res = await fetch(`${import.meta.env.VITE_HOST}/api/users/${userId}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (res.ok) {
            set({ user: null })
            return { success: true, message: "User deleted successfully" };
        } else {
            return { success: false, message: data.message };
        }
    },
}));