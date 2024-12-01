import * as z from "zod";

export const authFormSchema = (formType: "signin" | "signup") => {
  return z.object({
    email: z.string().email({ message: "El correo no es válido" }),
    username: formType === "signup" ? z.string().min(6, { message: "La cadena debe contener al menos 6 caracteres" }).max(50) : z.string().optional(),
    password: z.string().min(6, { message: "La cadena debe contener al menos 6 caracteres" }).max(50),
  })
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const showSchema = z.object({
  id: z.string(),
});

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6),
});

export const updateSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6),
});

export const listColumn = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createAt: z.string(),
  updateAt: z.string(),
});


export type IListColumn = z.infer<typeof listColumn>;
export type IShow = z.infer<typeof showSchema>;
export type IUpdate = z.infer<typeof updateSchema>;

export type ILogin = z.infer<typeof loginSchema>;
export type IRegister = z.infer<typeof registerSchema>;