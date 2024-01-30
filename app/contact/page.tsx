import Image from "next/image";

import { Form } from "@/components";

export default function Page() {
  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <Image
            src="/assets/icons/envelope.svg"
            alt="briefcase icon"
            width={40}
            height={40}
            priority={true}
          />
        </div>

        <Form />
      </div>
    </section>
  );
}
