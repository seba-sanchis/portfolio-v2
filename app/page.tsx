import { getHero } from "@/lib/actions";
import Image from "next/image";

export default async function Home() {
  const hero = await getHero();

  return (
    <section className="section">
      <div className="flex flex-col lg:flex-row lg:justify-between animate-show w-[696px]">
        <div className="mr-4">
          <h1 className="w-fit text-4xl font-semibold text-transparent animate-spin-gradient bg-clip-text bg-center bg-cover bg-red-to-pink-to-purple-horizontal-gradient">
            {hero.title}
          </h1>
          {hero.description.map((item, i) => (
            <p key={i} className="my-2 text-pretty">
              {item}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-center self-center min-w-64 w-64 bg-[--octonary-contrast] rounded-full p-4">
          <div className="rounded-full overflow-hidden">
            <Image
              src={hero.image.url}
              alt="hero image"
              width={256}
              height={256}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
