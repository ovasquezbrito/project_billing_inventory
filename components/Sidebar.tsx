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
    <aside className="hidden w-80 border-r bg-muted/40 md:block">
      <Link href="/">
        <Image
          src="/assets/images/logo_api_2.png"
          alt="logo"
          width={160}
          height={50}
          className="hidden lg:block"
        />
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <nav className='flex felx-col max-h-screen h-full gap-2'>
        <ul className='h-14 felx items-center border-b px-4 lg:h-[60px] lg:px-6'>
          {navItems.map(({ name, icon, url }) => (
            <Link key={name} href={url} className='lg:w-full'>
              <li className={cn('sidebar-nav-item', pathName === url && 'shad-active')}>
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
