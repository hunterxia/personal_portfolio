import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project }) {
  const router = useRouter();

  return (
    <div className="w-full md:w-1/2">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={350}
            layout="responsive"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
            <h2 className="text-xl font-bold text-white">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>
            <button
              onClick={() => router.push(project.caseStudyPath)}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
            >
              CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
