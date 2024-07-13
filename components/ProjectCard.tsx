import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-[520px]">
      <Image
        src={project.coverImageURL}
        alt="cover photo"
        width={520}
        height={280}
        className="w-[520px] h-[280px] aspect-video"
      />
      <Link
        href={"/projects/" + project._id}
        className="font-bold text-lg lg:text-xl my-2 underline underline-offset-4"
      >
        {project.name}
      </Link>
      <p className="">{project.description}</p>
      <div className="flex flex-wrap gap-2 my-1">
        {project.techStack.map((tech) => (
          <p className="border-2 border-white p-1" key={tech}>
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
