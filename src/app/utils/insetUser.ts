import { db } from "@/db";
import { usersTable } from "@/db/schema";

export interface User {
    name: string;
    age: number;
    email: string;
    phoneNumber: string;
}

export async function insertUser( data: User ) {

    await db.insert(usersTable).values({
        name: data.name,
        age: data.age,
        email: data.email,
        phoneNumber: data.phoneNumber
    })
}