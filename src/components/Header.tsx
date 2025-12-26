import React, { useState, useEffect } from "react";

const Header = () => {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  console.log(pathname);
  return (
    <header className="p-2 w-full flex justify-center">
      <ul className="w-96 h-full flex justify-around font-gloria-hallelujah text-lg text-center font-bold">
        {pathname == "/" ? (
          <li className="p-2 w-full h-full bg-white text-black">
            <a href="/">Home</a>
          </li>
        ) : (
          <li className="p-2 w-full h-full">
            <a href="/">Home</a>
          </li>
        )}
        <li className="p-2 w-full h-full">
          <a href="https://blog.rubr.xyz" target="_blank">Blog</a>
        </li>
        {pathname == "/projects" ? (
          <li className="p-2 w-full h-full bg-white text-black">
            <a href="/projects">Projects</a>
          </li>
        ) : (
          <li className="p-2 w-full h-full">
            <a href="/projects">Projects</a>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
