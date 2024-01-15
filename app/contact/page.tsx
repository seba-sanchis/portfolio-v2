import { Form } from "@/components";
import { FaEnvelope } from "react-icons/fa";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <FaEnvelope size={40} />
        </div>

        <Form />
      </div>
    </section>
  );
}
