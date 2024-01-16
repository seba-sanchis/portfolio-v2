import { about } from "@/constants";
import { ThemeImage } from "@/components";

export default function Home() {
  const { description, photo, position } = about;

  return (
    <section className="section">
      <div className="flex items-center animate-show">
        <div className="pr-8 max-w-[640px]">
          <h1 className="w-fit text-4xl font-semibold text-transparent animate-spin-gradient bg-clip-text bg-center bg-cover bg-red-to-pink-to-purple-horizontal-gradient">
            {position}
          </h1>
          <p className="my-4 text-pretty">{description}</p>
        </div>
        <div>
          <ThemeImage
            srcLight={photo.light}
            srcDark={photo.dark}
            alt="My personal photo"
            width={640}
            height={640}
          />
        </div>
      </div>
    </section>
  );
}
