"use server";

import { comparePassword } from "@/lib/crypt";
import { db } from "@/lib/db";
import { getAuthUser, setSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function signIn(email: string, password: string) {
  const user = await getAuthUser();

  if (user) {
    return { error: "Ya tienes una sesión iniciada" };
  }

  if (!email || !password) {
    return { error: "Todos los campos son obligatorios" };
  }

  const userExist = await db.query.users.findFirst({
    where: (u, { eq }) => eq(u.email, email.toLocaleLowerCase()),
  });

  if (!userExist) {
    return { error: "El correo no existe" };
  }

  const passwordMatch = await comparePassword(password, userExist.password);

  if (!passwordMatch) {
    return { error: "Usuario o contraseña es incorrecta" };
  }

  await setSession({
    id: userExist.id,
    email: userExist.email,
  });

  return redirect("/");
}