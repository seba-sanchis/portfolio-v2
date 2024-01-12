import { sections } from "@/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 bottom-0 border-e border-[--nav-border] bg-nav-background">
      <ul>
        {sections.map((section) => (
          <li
            className="relative w-28 text-[--nav-color] hover:text-[--nav-color-hover]"
            key={section.name}
          >
            <span className="absolute top-0 bottom-0 left-0 w-0.5 bg-[--nav-color-hover]"></span>
            <Link className="block py-5" href={section.url}>
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
