"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { sections, socialMedia } from "@/constants";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex sticky top-0 p-4 lg:hidden w-screen lg:-translate-y-full transition-transform duration-300 ease-in bg-transparent-background border-b border-[--septenary-contrast] z-30 ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <button className="p-2" onClick={() => setIsOpen(true)}>
          <FaBars size={20} />
        </button>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <nav
        className={`flex flex-col justify-between fixed top-0 left-0 bottom-0 py-4 border-e border-[--septenary-contrast] bg-[var(--page-background)] lg:bg-transparent-background lg:py-0 lg:translate-x-0 transition-transform duration-300 ease-in z-30 overflow-scroll ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="block self-center p-2 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={20} />
        </button>
        <ul onClick={() => setIsOpen(false)}>
          {sections.map((section) => (
            <li
              key={section.name}
              className={`relative w-28 text-sm hover:text-[--primary-contrast] ${
                pathName === section.url
                  ? "text-[--primary-contrast]"
                  : "text-[--quaternary-contrast]"
              }`}
            >
              <span
                className={`absolute top-0 bottom-0 left-0 w-0.5 bg-[--primary-contrast] ${
                  pathName === section.url ? "opacity-100" : "opacity-0"
                }`}
              ></span>
              <Link
                href={section.url}
                className="flex flex-col items-center gap-3 py-5"
              >
                <section.icon size={16} />
                <span>{section.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {socialMedia.map((social) => (
            <li
              key={social.name}
              className="relative w-28 text-sm text-[--quaternary-contrast] hover:text-[--primary-contrast]"
            >
              <Link
                href={social.url}
                target="_blank"
                className="flex flex-col items-center gap-3 py-5"
              >
                <social.icon size={16} />
                <span>{social.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
