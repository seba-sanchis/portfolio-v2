import Image from "next/image";

import { getSkills } from "@/lib/actions";

import { Icon } from "@/components";

export default async function Page() {
  const skills = await getSkills();

  const { frontend, backend, uiUx } = skills;

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Skills</h1>
          <Image
            src="/assets/svg/screwdriver-wrench.svg"
            alt="briefcase icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          <h2 className="font-semibold my-4">Frontend</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontend.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 items-center p-4 rounded text-pill-color bg-pill-background [--pill-accent:--hot-red]"
              >
                <Icon name={item.title} size={20} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-semibold my-4">Backend</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backend.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 items-center p-4 rounded text-pill-color bg-pill-background [--pill-accent:--electric-violet]"
              >
                <Icon name={item.title} size={20} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-semibold my-4">UI/UX</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {uiUx.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 items-center p-4 rounded text-pill-color bg-pill-background [--pill-accent:--bright-blue]"
              >
                <Icon name={item.title} size={20} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
