/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const info = {
  name: "Flavio",
  lastname: "Santos",
  role: "Mid Front-end Developer",
  address: {
    city: "São Luís",
    state: "MA",
    country: "Brazil",
  },
};

export function Hero() {
  return (
    <header
      data-aos="fade-up"
      className="flex flex-col gap-12 text-center mb-12"
    >
      <div className="flex items-center justify-between mt-4 mb-2 space-x-4">
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
      </div>

      <h1 className="text-[4.5rem] font-bold text-white">
        {info.name} {info.lastname}
      </h1>
      <p className="text-3xl text-gray-500 font-semibold">{info.role}</p>

      <div className="w-full h-[1px] bg-gray-600" />
    </header>
  );
}
