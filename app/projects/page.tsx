import Image from "next/image";

import { projects } from "@/constants";
import { Card } from "@/components";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Projects</h1>
          <Image
            src="/assets/svg/code-solid.svg"
            alt="briefcase icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          {projects.map((project, i) => (
            <Card
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              repository={project.repository}
              application={project.application}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
