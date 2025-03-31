import { Degree } from "./degree";
import { WorkExperience } from "./work";

export interface User {
    uid: string;
    profession?: string;
    image?: string;
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    citizenship?: string;
    dateOfBirth?: string;
    bio?: string;
    education?: Degree[];
    experience?: WorkExperience[];
    coverLetter?: string;
    documents?: boolean;
    createdAt?: string;
    updatedAt?: string;
}