import { ThemeImage } from "@/components";
import { getAbout } from "@/lib/actions";

export default async function Home() {
  const about = await getAbout();

  return (
    <section className="section">
      <div className="flex flex-col lg:flex-row items-center animate-show">
        <div className="max-w-lg">
          <h1 className="w-fit text-4xl font-semibold text-transparent animate-spin-gradient bg-clip-text bg-center bg-cover bg-red-to-pink-to-purple-horizontal-gradient">
            {about.title}
          </h1>
          {about.description.map((item, i) => (
            <p key={i} className="my-4 text-pretty">
              {item}
            </p>
          ))}
        </div>
        <div>
          <ThemeImage
            lightImage={about.lightImage.url}
            darkImage={about.darkImage.url}
            alt="My personal photo"
            width={512}
            height={512}
          />
        </div>
      </div>
    </section>
  );
}
