import { ThemeImage } from "@/components";
import { getAbout } from "@/lib/actions";
import Image from "next/image";

export default async function Page() {
  const about = await getAbout();

  return (
    <section className="section">
      <div className="w-[696px]">
        <div className="flex justify-between p-6 rounded-lg bg-[--septenary-contrast]">
          <h1 className="text-4xl font-semibold">About</h1>
          <Image
            src="/assets/icons/circle-user.svg"
            alt=""
            width={40}
            height={40}
            priority={true}
          />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {about.description.map((description, i) => (
            <p key={i}>{description}</p>
          ))}
        </div>

        <div className="flex justify-center">
          <ThemeImage
            lightImage={about.lightImage.url}
            darkImage={about.darkImage.url}
            alt="personal photo"
            width={256}
            height={256}
          />
        </div>
      </div>
    </section>
  );
}
