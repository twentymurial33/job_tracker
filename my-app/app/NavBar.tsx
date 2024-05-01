"use client"

import React from 'react';
import{usePathname} from "next/navigation";
import Link from 'next/link';
import { GiBugleCall } from "react-icons/gi";
import classnames from 'classnames';

const NavBar = () => {
  const currentPath=usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Jobs", href: "/jobs" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center" >
        <Link href="/"> <GiBugleCall /></Link>
      <ul className="flex space-x-6">
      {links.map(link => 
          <Link key={link.href}
          // className={classnames({})}
            className= {`${link.href === currentPath ?'text-zinc-900':'text-zinc-500'}`} 
            href={link.href}>{link.label}</Link>)}
    
   </ul>
    </nav>
  )
}

export default NavBar