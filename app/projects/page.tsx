import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { Card } from "@/components";
import { getProjects } from "@/lib/actions";

export default async function Page() {
  const projects = await getProjects();

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Projects</h1>
          <Image
            src="/assets/icons/code.svg"
            alt="briefcase icon"
            width={40}
            height={40}
            priority={true}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {projects.map((project, i) => (
            <Card
              key={i}
              title={project.title}
              description={project.description}
              image={project.image.url}
              tags={project.tags}
              application={project.application}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-8 py-4 border-solid [border-block-width:1px] [border-image:var(--purple-to-blue-horizontal-gradient)1]">
          <div className="flex justify-between items-center font-semibold">
            <h3 className="text-transparent bg-clip-text [background-image:var(--purple-to-blue-horizontal-gradient)]">
              Github repositories
            </h3>
            <FaGithub size={20} className="text-[var(--bright-blue)]" />
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {projects.map((project, i) => (
              <li key={i}>
                <Link
                  href={project.repository}
                  className="text-[--quaternary-contrast] hover:text-[--primary-contrast]"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
