import { about } from "@/constants";
import { ThemeImage } from "@/components";

export default function Home() {
  const { description, photo, position } = about;

  return (
    <section className="section">
      <div className="flex flex-col lg:flex-row items-center animate-show">
        <div className="max-w-lg">
          <h1 className="w-fit text-4xl font-semibold text-transparent animate-spin-gradient bg-clip-text bg-center bg-cover bg-red-to-pink-to-purple-horizontal-gradient">
            {position}
          </h1>
          {description.map((item, i) => (
            <p key={i} className="my-4 text-pretty">
              {item}
            </p>
          ))}
        </div>
        <div>
          <ThemeImage
            srcLight={photo.light}
            srcDark={photo.dark}
            alt="My personal photo"
            width={512}
            height={512}
          />
        </div>
      </div>
    </section>
  );
}
