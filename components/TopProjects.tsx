"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import Button from "./Button";

function TopProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/v1/projects/latest");
        console.log(response);
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section>
      <h2 className="font-bold text-3xl lg:text-6xl leading-[45px] lg:leading-[90px] lg:text-center">
        Professional Highlights
      </h2>
      <p className="lg:text-2xl lg:text-center">My notable projects</p>
      <div className="flex flex-col gap-4 lg:flex-row justify-between mt-8">
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
