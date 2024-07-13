import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

async function getProjects() {
  const response = await fetch("http://localhost:3000/api/v1/projects", {
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

export default async function page() {
  const projects: Project[] = await getProjects();

  return (
    <main>
      <h2 className="font-bold text-3xl lg:text-6xl leading-[45px] lg:leading-[90px]">
        Project Showcase
      </h2>
      <p className="lg:text-2xl">Take a look at some of my finest work</p>
      <section className="flex flex-wrap justify-between gap-y-4 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </section>
    </main>
  );
}
