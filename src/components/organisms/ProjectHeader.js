import { useRouter } from "next/navigation";

export default function ProjectHeader({ project }) {
  const router = useRouter();

  return (
    <section className="hero-background flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {project.name}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Discover the intricacies and the journey of the {project.name}{" "}
          project, including a comprehensive overview, the technology stack
          used, and a glimpse into the final product.
        </p>
        <button
          className="bg-purple-600 text-white font-bold py-3 px-14 rounded hover:bg-purple-700 transition duration-300"
          onClick={() => router.push("/projects")}
        >
          Back to Projects
        </button>
      </div>
    </section>
  );
}
