
import Sidebar from "@/components/Sidebar";
import { getAuthUser } from "@/lib/session";
import { redirect } from "next/navigation";


export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getAuthUser();
  if (!user) {
    return redirect("/sign-in");
  }
  return (
    <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar {...user} /> 
      {/*<section className="flex h-full flex-1 flex-col">
        {/* <MobileNavigation {...user}/> <Header /> 
        <div className="main-content">{children}</div>
      </section>
      */}
      {/* Sidebar /> */}
 
    </main>
   
  );
}
