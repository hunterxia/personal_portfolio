"use client";
import { useRouter } from "next/navigation";
import ProjectHeader from "@/components/organisms/ProjectHeader";
import ProjectOverview from "@/components/organisms/ProjectOverview";
import projects from "@public/data/projects";

export default function ProjectDetail({ params }) {
  const router = useRouter();
  const project = projects.find((project) => project.id === params.id);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  const handleRedirect = () => {
    window.location.href = project.link;
  };

  return (
    <main className="min-h-screen dark:bg-gray-800">
      <ProjectHeader project={project} />
      <ProjectOverview project={project} handleRedirect={handleRedirect} />
    </main>
  );
}
