import { useRouter } from "next/navigation";

export default function ProjectOverview({ project, handleRedirect }) {
  const router = useRouter();

  return (
    <section className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Project Overview
          </h2>
          <p className="mb-6">{project.overview}</p>
          <h3 className="text-2xl font-bold mt-8 mb-4">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-gray-300 dark:bg-gray-700 px-4 py-2 hover:bg-gray-400 rounded"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            <button
              onClick={handleRedirect}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition duration-300"
            >
              PROJECT LINK
            </button>
            <button
              onClick={() => router.push("/projects")}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-6 rounded transition duration-300"
            >
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
