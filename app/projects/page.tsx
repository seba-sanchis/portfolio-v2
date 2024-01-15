import { Card } from "@/components";
import { projects } from "@/constants";
import { FaCode } from "react-icons/fa";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Projects</h1>
          <FaCode size={40} />
        </div>

        <div>
        {projects.map((project, i) => (
          <Card
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            repository={project.repository}
            application={project.application}
          />
        ))}
        </div>
      </div>
    </section>
  );
}
