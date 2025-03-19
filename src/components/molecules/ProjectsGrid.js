import ProjectCard from "../organisms/ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
