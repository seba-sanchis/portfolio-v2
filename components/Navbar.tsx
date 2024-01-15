"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sections, socialMedia } from "@/constants";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col justify-between fixed top-0 left-0 bottom-0 border-e border-[--septenary-contrast] bg-transparent-background">
      <ul>
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
  );
}
