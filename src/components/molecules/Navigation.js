import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <a
              onClick={() => router.push(item.path)}
              className="text-2xl text-gray-700 hover:text-gray-500 transition-colors dark:text-gray-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
