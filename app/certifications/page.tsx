import Image from "next/image";

import { ThemeImage } from "@/components";
import { getCertifications } from "@/lib/actions";

export default async function Page() {
  const certifications = await getCertifications();

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Certifications</h1>
          <Image
            src="/assets/icons/certificate.svg"
            alt="briefcase icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          {certifications.map((item, i) => (
            <div key={i} className="flex gap-2 my-4">
              <div>
                <ThemeImage
                  lightImage={item.lightImage.url}
                  darkImage={item.darkImage.url}
                  alt={`${item.company} logo`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between font-semibold">
                  <h2>
                    {item.title} | {item.company}
                  </h2>
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-[--quaternary-contrast]">
                  {item.credential}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
