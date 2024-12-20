"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  return (
    <div className="z-[99] bg-primary-950 h-[100vh]">
     
<div className="absolute left-64 top-[-45px]">

    <button className="sm:hidden text-3xl" onClick={()=>setClick(!click)}><BiAlignRight /></button>
</div>
     
    <nav className={`"border-r sm:block border-red-200 ${click?"block":'hidden'} z-50"`}>
     
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
              >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
              </div>
  );
}

export default SideNavigation;
