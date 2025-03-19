"use client";
import Image from "next/image";
import Navigation from "../molecules/Navigation";
import ThemeSwitch from "../molecules/ThemeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 px-10 py-5 shadow-md dark:bg-slate-900">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-20 h-14">
          <Image src="/assets/logo.png" alt="Logo" width={100} height={40} />
        </div>
        <div>
          <h1 className="text-3xl font-bold dark:text-white">Hunter Xia</h1>
          <p className="text-base text-gray-500 dark:text-gray-300">
            Software Engineer based in Chicago
          </p>
        </div>
      </div>
      <Navigation />
      <ThemeSwitch />
    </header>
  );
}
