"use server";

import { encryptPassword } from "@/lib/crypt";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { getAuthUser, setSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function signUp({ email, username, password }: { email: string; username: string | undefined; password: string }) {
    const user = await getAuthUser();

    if (user) {
        return { error: "Ya tienes una sesión iniciada" };
    }

    if (!email || !username || !password) {
        return { error: "Todos los campos son obligatorios" };
    }

    const hastPassword = await encryptPassword(password);

    const createUser =await db.insert(users).values({ 
        email: email.toLowerCase(), 
        username, 
        password: hastPassword 
    }).returning()


    await setSession({ 
        id: createUser[0].id,
        email: createUser[0].email,
    });

    return redirect("/");

    
}