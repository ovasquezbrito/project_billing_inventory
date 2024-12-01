import { Button } from "@/components/ui/button";
import { clearSession } from "@/lib/session";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        Inicio
        <form
          action={async () => {
            "use server";
            await clearSession();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}              
              height={24}
              className='w-6'
            />
          </Button>
        </form>
      </div>
    </>
  );
}
