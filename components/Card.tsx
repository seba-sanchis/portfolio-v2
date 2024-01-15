import Image from "next/image";
import Link from "next/link";

import { Project } from "@/app/types";

export default function Card({
  title,
  description,
  image,
  technologies,
  repository,
  application,
}: Project) {
  return (
    <Link
      href={application}
      target="_blank"
      className="group flex flex-col my-4 border border-[--senary-contrast] hover:bg-[--subtle-purple]"
    >
      <div className="h-48 overflow-hidden">
        <Image src={image} alt={`${title} image`} width={696} height={192} />
      </div>

      <div className="flex flex-col p-6 gap-4">
        <h2 className="font-semibold">{title}</h2>
        <p>{description}</p>
        <ul className="flex gap-2">
          {technologies.map((technology, i) => (
            <li key={i}>{technology}</li>
          ))}
        </ul>
        <div className="text-transparent font-semibold transition-[background-position] duration-[1800ms] ease-out-[cubic-bezier(0,0,0.58,1)] bg-[length:200%_100%] bg-clip-text bg-[100%_0] bg-pink-to-highlight-to-purple-to-blue-horizontal-gradient group-hover:bg-[0_0]">
          View project
        </div>
      </div>
    </Link>
  );
}
