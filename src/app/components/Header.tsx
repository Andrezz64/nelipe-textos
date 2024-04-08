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
        <div className="w-[80%]">
          <h1 className="ml-5">
            <span>Alexandria do </span>
            <span className="text-[#d32b0d]">Caos</span>
          </h1>
        </div>
        <div className="w-[0%]">
          <nav>
            <ul
              className={`flex gap-2 max-md:hidden ${
                isScrolled ? "hidden" : ""
              }`}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
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
