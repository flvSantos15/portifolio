/* eslint-disable react/jsx-no-comment-textnodes */

import Image from "next/image";
import { useState } from "react";

const info = {
  name: "Flavio",
  lastname: "Santos",
  role: "Full Stack Developer",
  avatar: "https://github.com/flvSantos15.png",
  address: {
    city: "São Luís",
    state: "MA",
    country: "Brazil",
  },
};

export function Hero() {
  const [lang, setLang] = useState("en");

  const handleLang = (lang: string) => {
    setLang(lang);
  };

  return (
    <header className="flex justify-between text-left">
      {/* <div className="flex items-center justify-between mt-4 mb-2 space-x-4">
        <Link
          href="https://linkedin.com/in/flvsantos15"
          target="_blank"
          className="text-gray-200 hover:underline"
        >
          <AiFillLinkedin className="size-9 text-textLight cursor-pointer" />
        </Link>
        <Link
          href="https://github.com/flvSantos15"
          target="_blank"
          className="text-gray-200 hover:underline"
        >
          <AiOutlineGithub className="size-9 text-textLight cursor-pointer" />
        </Link>
      </div> */}

      <div className="flex gap-4">
        <div className="w-16 h-16">
          <Image src={info.avatar} alt="Avatar" width={10} height={10} className="w-16 h-16 rounded-full" />
        </div>

        <div className="h-full flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-white">
            {info.name} {info.lastname}
          </h1>

          <p className="text-base text-gray-500 font-semibold">{info.role}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 h-10 w-20">
        <button onClick={() => handleLang("en")} className="">
          EN
        </button>
        <p className="">
          |
        </p>
        <button onClick={() => handleLang("fr")} className="">
          FR
        </button>
      </div>
    </header>
  );
}
