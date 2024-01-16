import Image from "next/image";

import { certifications } from "@/constants";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Certifications</h1>
          <Image
            src="/assets/certificate-solid.svg"
            alt="briefcase icon"
            width={40}
            height={40}
          />
        </div>

        <div>
          {certifications.map((item, i) => (
            <div key={i} className="flex gap-2 my-4">
              <div>
                <Image
                  src={item.image}
                  alt={`${item.company} logo`}
                  width={56}
                  height={56}
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <h2 className="font-semibold">
                    {item.title} | {item.company}
                  </h2>
                  <span>{item.date}</span>
                </div>
                <span>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
