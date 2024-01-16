import Image from "next/image";

import { education } from "@/constants";
import { ThemeImage } from "@/components";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Education</h1>
          <Image
            src="/assets/graduation-cap-solid.svg"
            alt="briefcase icon"
            width={48}
            height={48}
          />
        </div>

        <div>
          {education.map((item, i) => (
            <div key={i} className="flex gap-2 my-4">
              <div>
                <ThemeImage
                  srcLight={item.image.light}
                  srcDark={item.image.dark}
                  alt={`${item.school} logo`}
                  width={56}
                  height={56}
                />
              </div>

              <div className="w-full">
                <div className="flex justify-between">
                  <h2 className="font-semibold">
                    {item.title} | {item.school}
                  </h2>
                  <span>{item.date}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
