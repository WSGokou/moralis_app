'use client';

import Link from 'next/link';
import React, {useState} from 'react';
import {usePathname} from 'next/navigation';

const navLinks = [
  {
    text: 'Home',
    href: '/',
    // icon: <MdLogin />,
  },
  {
    text: 'WalletBalance',
    href: '/balance',
    // icon: <MdSpaceDashboard />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(true);

  return (
    <div
      className={`group flex flex-col my-auto p-4 gap-7 fixed left-0 bg-black text-white h-full text-xl md:text-2xl xl:text-4xl`}
    >
      <div
        className={`${
          !navOpen ? '' : 'text-blue-500'
        } flex gap-2 hover:text-blue-500 items-center`}
        onClick={() => setNavOpen(!navOpen)}
      >
        <p>{/* <MdMenu /> */}</p>
        <p className={`${!navOpen ? 'hidden' : 'block'} group-hover:block`}>
          Menu
        </p>
      </div>
      {navLinks.map((link, idx) => {
        const isActive = pathname?.endsWith(link.href);

        return (
          <Link
            className={`flex gap-2 items-center hover:text-blue-500 ${
              isActive && idx !== 4 ? 'text-blue-500' : ''
            }`}
            key={idx}
            href={link.href}
          >
            {/* <p>{link.icon}</p> */}
            <p className={`${!navOpen ? 'hidden' : 'block'} group-hover:block`}>
              {link.text}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
