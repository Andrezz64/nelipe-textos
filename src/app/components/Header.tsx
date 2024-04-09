import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o event listener ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`p-2 fixed w-full bg-black ${
        isScrolled ? "opacity-75 shadow-md" : ""
      }`}
    >
      <div className="flex itemns-center">
        <a href="/" className="w-[80%]">
          <h1 className="ml-5">
            <span>Alexandria do </span>
            <span className="text-[#d32b0d]">Caos</span>
          </h1>
        </a>
        <div className="w-[0%]">
          <nav className="">
            <ul
              className={`flex gap-2 max-md:hidden ${
                isScrolled ? "hidden" : ""
              }`}
            >
              <li className="border-b-2 border-transparent hover:border-[#d32b0d] duration-300">
                <a href="/">Home</a>
              </li>
              <li className="border-b-2 border-transparent hover:border-[#d32b0d] duration-300">
                <a href="/textos">Textos</a>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
