import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <aside className="fixed left-0 top-50 ml-3 flex flex-col items-center p-4 space-y-4 rounded bg-white dark:bg-gray-800 z-10">
      <a
        href="https://www.linkedin.com/in/yu-xia-swe/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="mx-1"
      >
        <FaLinkedin size="2em" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="mx-1"
      >
        <FaTwitter size="2em" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube"
        className="mx-1"
      >
        <FaYoutube size="2em" />
      </a>
      <a
        href="https://github.com/hunterxia"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="mx-1"
      >
        <FaGithub size="2em" />
      </a>
    </aside>
  );
}
