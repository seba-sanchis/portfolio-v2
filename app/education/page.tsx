import { education } from "@/constants";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Education</h1>
          <FaGraduationCap size={40} />
        </div>

        <div className="mx-6">
          {education.map((item, i) => (
            <div key={i} className="flex gap-2 my-4">
              <div>
                <Image
                  src={item.image}
                  alt={`${item.school} logo`}
                  width={64}
                  height={64}
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
