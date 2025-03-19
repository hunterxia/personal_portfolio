export default function Section({ title, children }) {
  return (
    <div className="mb-4">
      <h2
        className={`text-${
          title ? "3xl" : "base"
        } font-bold text-gray-900 dark:text-white mb-4`}
      >
        {title}
      </h2>
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}
