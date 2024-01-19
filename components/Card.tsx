import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types";

export default function Card({
  title,
  description,
  image,
  tags,
  application,
}: Project) {
  return (
    <Link
      href={application}
      target="_blank"
      className="group relative flex flex-col border border-[--senary-contrast] hover:bg-[--subtle-purple]"
    >
      <div className="h-48 overflow-hidden">
        <Image src={image} alt={`${title} image`} width={696} height={192} />
      </div>

      <div className="flex flex-col p-4 gap-2 text-sm">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex flex-col gap-1">
          <p className="text-pretty">{description}</p>
        </div>

        <ul className="flex gap-1">
          {tags.map((tag, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span>·</span>}
              {tag}
            </li>
          ))}
        </ul>

        <div className="text-transparent font-semibold transition-[background-position] duration-[1800ms] ease-out-[cubic-bezier(0,0,0.58,1)] bg-[length:200%_100%] bg-clip-text bg-[100%_0] bg-pink-to-highlight-to-purple-to-blue-horizontal-gradient group-hover:bg-[0_0]">
          View project
        </div>
      </div>
    </Link>
  );
}
