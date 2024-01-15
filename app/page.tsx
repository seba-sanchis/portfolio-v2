import Image from "next/image";

import { aboutMe } from "@/constants";

export default function Home() {
  const { description, photo, position } = aboutMe;

  return (
    <section className="section">
      <div className="flex mt-12 animate-show">
        <div className="py-8 pr-8 max-w-[640px]">
          <h1 className="w-fit text-4xl font-semibold text-transparent animate-spin-gradient bg-clip-text bg-center bg-cover bg-red-to-pink-to-purple-horizontal-gradient">
            {position}
          </h1>
          <p className="my-4">{description}</p>
        </div>
        <div>
          <Image src={photo} alt="My personal photo" width={640} height={640} />
        </div>
      </div>
    </section>
  );
}
