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
            src="/assets/svg/graduation-cap-solid.svg"
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
                  width={48}
                  height={48}
                />
              </div>

              <div className="w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between font-semibold">
                  <h2 className="flex flex-col lg:flex-row">
                    <span>{item.title}</span>{" "}
                    <span className="hidden lg:inline-block">|</span>{" "}
                    <span>{item.school}</span>
                  </h2>
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-[--quaternary-contrast] max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
