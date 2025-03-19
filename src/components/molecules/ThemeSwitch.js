import { useTheme } from "../../app/ThemContext";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme === "light" ? (
        <MoonIcon alt="Dark Mode" width={30} height={30} />
      ) : (
        <SunIcon alt="Light Mode" width={30} height={30} />
      )}
    </div>
  );
}
