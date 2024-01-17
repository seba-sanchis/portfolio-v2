import Image from "next/image";

import { skills } from "@/constants";

export default function Page() {
  const { backend, frontend, uiUx } = skills;

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Skills</h1>
          <Image
            src="/assets/svg/screwdriver-wrench-solid.svg"
            alt="briefcase icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          <h2 className="font-semibold my-4">Frontend</h2>
          <ul className="flex gap-2 w-full flex-wrap">
            {frontend.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 items-center p-4 w-[calc(25%-6px)] rounded text-pill-color bg-pill-background [--pill-accent:--hot-red]"
              >
                <item.icon size={20} />
                <span>{item.technology}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-semibold my-4">Backend</h2>
          <ul className="flex gap-2 w-full flex-wrap">
            {backend.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 items-center p-4 w-[calc(25%-6px)] rounded text-pill-color bg-pill-background [--pill-accent:--electric-violet]"
              >
                <item.icon size={20} />
                <span>{item.technology}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-semibold my-4">UI/UX</h2>
          <ul className="flex gap-2 w-full flex-wrap">
            {uiUx.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 items-center p-4 w-[calc(25%-6px)] rounded text-pill-color bg-pill-background [--pill-accent:--bright-blue]"
              >
                <item.icon size={20} />
                <span>{item.technology}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
