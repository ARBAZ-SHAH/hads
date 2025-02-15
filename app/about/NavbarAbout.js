"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../components/MenuOverlay";
import Image from 'next/image.js'

const navLinks = [
  {
    title: "Home",
    path: "/",  // Navigates to app/page.js
  },
  {
    title: "Playlists",
    path: "/#playlists",  // Navigates within Home page
  }
];

const NavbarAbout = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto lg:py-4">
        <Link
          href={"/about"}
          className="text-2xl font-semibold text-white md:text-5xl"
        >
          <Image src="/images/HS.jpg" alt="Logo" className="object-cover rounded-full" width={50} height={50} />  
        </Link>
        <div className="block mobile-menu md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="text-white hover:text-gray-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavbarAbout;
