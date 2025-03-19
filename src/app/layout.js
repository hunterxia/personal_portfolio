import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { ThemeProvider } from "./ThemContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full-Stack Developer Portfolio",
  description:
    "Explore Hunter Xia's portfolio. Discover projects, skills, and professional insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <link
            href="https://fonts.google.com/share?selection.family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700"
            rel="stylesheet"
          />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
