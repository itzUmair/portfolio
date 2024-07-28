import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import Button from "./Button";

async function getTopProjects() {
  const response = await fetch(
    `${process.env.PUBLIC_API_BASE_URL}/api/v1/projects/latest`,
    {
      next: { revalidate: 86400 },
    }
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

async function TopProjects() {
  const projects: Project[] = await getTopProjects();

  return (
    <section>
      <h2 className="font-bold text-3xl lg:text-6xl leading-[45px] lg:leading-[90px] lg:text-center">
        Professional Highlights
      </h2>
      <p className="lg:text-2xl lg:text-center">My notable projects</p>
      <div className="flex flex-col flex-wrap gap-4 lg:flex-row mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Button content="More Projects" image="/arrow.png" link="/projects" />
      </div>
    </section>
  );
}

export default TopProjects;
