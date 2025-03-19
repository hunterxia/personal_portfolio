"use client";
import { useRouter } from "next/navigation";
import ProjectsGrid from "@/components/molecules/ProjectsGrid";
import projects from "@public/data/projects";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-10">
            PROJECTS
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here you will find some of the personal and client projects that
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            I created with each project containing its own case study
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
