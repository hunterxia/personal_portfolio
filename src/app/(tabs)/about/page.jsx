"use client";
import { useRouter } from "next/navigation";
import SkillsList from "@/components/molecules/SkillsList";
import Section from "@/components/atoms/Section";

export default function About() {
  const router = useRouter();

  const skills = [
    "HTML/CSS",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "Swift",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Django",
    "Springboot",
    "MySQL",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen p-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          ABOUT ME
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Here you will find more information about me,
        </p>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          what I do, and my current skills mostly in terms of programming and
          technology
        </p>

        <div className="w-full md:flex md:justify-between md:items-start md:space-x-10">
          <div className="md:w-1/2">
            <Section title="Get to know me!">
              I'm a{" "}
              <span className="font-semibold">Spirited Software Engineer</span>{" "}
              with a laser focus on full-stack development. My passion for
              development goes beyond code; it's about building
              bridges—connecting ideas to implementation and people to products.
              You'll find a showcase of my collaborative projects and individual
              triumphs in the Projects section. My commitment to growth extends
              to my peers as well, as I actively share insights and learnings
              with the vibrant developer community. Join the conversation on
              LinkedIn or catch my latest tech musings on Instagram.
            </Section>
            <Section>
              On the lookout for dynamic job roles that promise growth and
              learning, I am eager to bring my full-stack development prowess to
              your team. Should you find that my skills align with your needs,
              let's get in touch and explore how we can drive success together.
            </Section>
            <button
              className="bg-purple-600 text-white py-3 px-14 rounded hover:bg-purple-700 transition duration-300"
              onClick={() => router.push("/contact")}
            >
              CONTACT
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Section title="Programming Languages and Tools">
              <SkillsList skills={skills} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
