import Image from "next/image";

import { getExperience } from "@/lib/actions";

export default async function Page() {
  const experience = await getExperience();

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Experience</h1>
          <Image
            src="/assets/icons/briefcase.svg"
            alt="briefcase icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          <div className="flex flex-col lg:flex-row lg:justify-between font-semibold my-4">
            <h2>
              {experience.company} | {experience.position}
            </h2>
            <span>{experience.date}</span>
          </div>
          <ul>
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
