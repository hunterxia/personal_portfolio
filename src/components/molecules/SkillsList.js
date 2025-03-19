export default function SkillsList({ skills }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded text-center"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
