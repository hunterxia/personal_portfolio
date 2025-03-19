"use client";
import { useRouter } from "next/navigation";
import SocialLinks from "@/components/molecules/SocialLinks";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="hero-background min-h-screen flex items-center justify-center dark:bg-gray-800"
    >
      <SocialLinks />

      <div className="flex-grow flex flex-col items-center justify-center bg-transparent dark:text-center p-8 ml-24">
        <div className="max-w-lg text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            HEY, I'M Hunter Xia
          </h1>

          <p className="text-base text-gray-700 dark:text-gray-300 mb-8">
            Aspiring Software Engineer and Machine Learning Enthusiast |
            Committed to Using Technology to Address Real-World Challenges
          </p>
        </div>
        <button
          className="bg-purple-600 text-white font-bold py-3 px-14 rounded hover:bg-purple-700 transition duration-300"
          onClick={() => router.push("/projects")}
        >
          PROJECTS
        </button>
      </div>
    </section>
  );
}
