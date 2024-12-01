"use client";

import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signUp } from "@/app/(auth)/sign-up/actions";
import { authFormSchema } from "@/app/models/auth.schema";
import OTPModal from "./OTPModal";
import { signIn } from "@/app/(auth)/sign-in/actions";

type FormType = "signin" | "signup";

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState("");

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      if (type === "signup") {
        const user = await signUp({
          email: values.email,
          username: values.username,
          password: values.password,
        });
        if (user.error) {
          setErrorMessage(user.error);
        }
      } else {
        const user = await signIn(values.email, values.password);
        if (user.error) {
          setErrorMessage(user.error);
        }
      }
      setIsEmailSent(values.email);
    } catch (error) {
      setErrorMessage(`${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
          {type === "signin"
                  ? "iniciar sesión en su cuenta"
                  : "Registrate"}
          </CardTitle>
          <CardDescription>
            <p>
              Bienvenido a AppiSoft. Por favor inicie sesión o registrese para
              continuar.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          
              {type === "signup" && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <div className="shad-form-item">
                        <FormLabel className="shad-form-label">
                          Nombre y Apellido
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ingrese Nombre y Apellido"
                            className="shad-input"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              )}
              {type === "signup" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="shad-form-item">
                        <FormLabel className="shad-form-label">
                          Correo Electrónico
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ingrese su correo"
                            className="shad-input"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              )}
              {type === "signup" && (
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="shad-form-item">
                        <FormLabel className="shad-form-label">
                          Contraseña
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Ingrese contraseña"
                            className="shad-input"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              )}
              {type === "signin" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="shad-form-item">
                        <FormLabel className="shad-form-label">
                          Correo Electrónico
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ingrese su correo"
                            className="shad-input"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              )}
              {type === "signin" && (
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="shad-form-item">
                        <FormLabel className="shad-form-label">
                          Contraseña
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Ingrese contraseña"
                            className="shad-input"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="shad-form-message" />
                    </FormItem>
                  )}
                />
              )}
              <Button
                type="submit"
                className="form-submit-button"
                disabled={isLoading}
              >
                {type === "signin" ? "Iniciar Sesion" : "Registrarse"}
                {isLoading && (
                  <Image
                    src="/assets/icons/loader.svg"
                    alt="loading"
                    width={24}
                    height={24}
                    className="animate-spin ml-2"
                  />
                )}
              </Button>
              {errorMessage && <p className="error-message">*{errorMessage}</p>}
              <div className="body-2 flex justify-center">
                <p className="text-light-100">
                  {type === "signin"
                    ? "¿No tienes una cuenta?"
                    : "¿Ya tienes una cuenta?"}
                </p>
                <Link
                  href={type === "signin" ? "/sign-up" : "/sign-in"}
                  className="ml-1 font-medium text-brand"
                >
                  {type === "signin" ? "Registrate" : "Iniciar Sesion"}
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* <OTPModal /> */}
      {/*  {true && (
        <OTPModal email={form.getValues("email")} />
      )} */}
    </>
  );
};

export default AuthForm;
