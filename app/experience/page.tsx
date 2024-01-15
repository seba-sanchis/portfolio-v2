import { experience } from "@/constants";
import { FaBriefcase } from "react-icons/fa";

export default function Page() {
  const { company, position, date, description } = experience;

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Experience</h1>
          <FaBriefcase size={40} />
        </div>

        <div className="mx-6">
          <div className="flex justify-between my-4">
            <h2 className="font-semibold">
              {company} | {position}
            </h2>
            <span>{date}</span>
          </div>
          <ul>
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
