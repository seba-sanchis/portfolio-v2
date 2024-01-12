import { Certifications, Contact, Education, Experience, Hero, Projects, Skills } from "@/components";


export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />

      <Experience />

      <Education />

      <Certifications />

      <Projects />

      <Skills />

      <Contact />
    </main>
  )
}
