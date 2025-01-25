"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { SECTIONS } from "@/constants";
import { FaBars, FaEllipsisH, FaTimes } from "react-icons/fa";
import { Icon, ThemeImage } from ".";

type Social = {
  name: string;
  url: string;
};

export default function Navbar({ social }: { social: Social[] }) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`flex sticky top-0 p-4 lg:hidden w-screen lg:-translate-y-full transition-transform duration-300 ease-in bg-transparent-background border-b border-[--septenary-contrast] z-30 ${
          isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <button
          aria-label="Menu"
          className="p-2"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={20} />
        </button>
      </div>
      <nav
        className={`flex flex-col justify-between fixed top-0 left-0 bottom-0 pt-4 pb-8 border-e border-[--septenary-contrast] bg-[var(--page-background)] lg:bg-transparent-background lg:py-0 lg:translate-x-0 transition-transform duration-300 ease-in z-30 overflow-scroll no-scrollbar ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close"
          className="block self-center p-2 lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={20} />
        </button>
        <ul onClick={() => setIsOpen(false)}>
          <li
            key="Hero"
            className={`relative w-28 text-sm hover:text-[--primary-contrast] ${
              pathName === "/"
                ? "text-[--primary-contrast]"
                : "text-[--quaternary-contrast]"
            }`}
          >
            <span
              className={`absolute top-0 bottom-0 left-0 w-0.5 bg-[--primary-contrast] ${
                pathName === "/" ? "opacity-100" : "opacity-0"
              }`}
            ></span>
            <Link href="/" className="flex flex-col items-center gap-3 py-5">
              <ThemeImage
                lightImage="/assets/ss-logo-light.svg"
                darkImage="/assets/ss-logo-dark.svg"
                alt="ss logo"
                width={40}
                height={40}
              />
            </Link>
          </li>
          {SECTIONS.map((section) => (
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
                <Icon name={section.name} size={16} />
                <span>{section.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label="Open social media links"
          className="relative w-28 text-sm text-[--quaternary-contrast] hover:text-[--primary-contrast]"
          onClick={() => setIsActive(true)}
        >
          <span
            className={`absolute top-0 bottom-0 left-0 w-0.5 bg-[--primary-contrast] ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          ></span>
          <div className="flex flex-col items-center gap-3 py-5">
            <FaEllipsisH size={16} />
          </div>
        </button>
      </nav>

      <ul
        className={`flex-col absolute bottom-[16px] left-[110px] z-30 text-[--primary-contrast] bg-[--page-background] border border-[--senary-contrast] rounded shadow-[10px_4px_40px_#00000013] ${
          isActive ? "flex" : "hidden"
        }`}
      >
        {social.map((item) => (
          <li
            key={item.name}
            className="block relative w-20 text-sm text-[--quaternary-contrast] hover:text-[--primary-contrast] hover:bg-[--senary-contrast]"
          >
            <Link
              href={item.url}
              target="_blank"
              className="flex flex-col items-center gap-3 py-4"
            >
              <Icon name={item.name} size={20} />
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-10 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 z-10 ${
          isActive ? "block" : "hidden"
        }`}
        onClick={() => setIsActive(false)}
      ></div>
    </>
  );
}
