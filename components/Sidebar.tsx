"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  username: string;
  email: string;
}

const Sidebar = ({ username, email }: Props) => {

  const pathName = usePathname()
  return (
    <aside className="flex-1 hidden w-80 border-r bg-muted/40 md:block">
      <Link href="/" className="flex items-center gap-2 p-4">
        <Image
          src="/assets/images/logo_comercio.jpg"
          alt="logo"
          width={80}
          height={50}
          className="hidden lg:block"
        />
        <p className="font-bold">Comervcialización y <span className="text-green-800">Logística</span></p>
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
        <ul className='h-14 felx items-center border-b px-4 lg:h-[60px] lg:px-6'>
          {navItems.map(({ name, icon, url }) => (
            <Link key={name} href={url} className='lg:w-full'>
              <li className={cn(pathName === url ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground')}>
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn('nav-icon', pathName === url && 'nav-icon-active')}
                />
                <p className='hidden lg:block'>{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
