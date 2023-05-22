import { useRouter } from "next/router";
import { ArrowCircleRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import vtol from "../public/drne.png";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header className="w-full fixed top-0 md:-top-0 z-50 flex justify-between items-center h-16 md:h-16 px-2 md:px-4 bg-black border-b border-black">
        <div className="sticky top-0 flex md:justify-between items-center h-8 w-full">
          <button onClick={() => setShowMenu((prev) => !prev)} className="focus:outline-none block mr-16 md:hidden z-50">
            {showMenu ? <XIcon className="w-8 h-8 text-white" /> : <MenuIcon className="w-8 h-8 text-white" />}
          </button>
          <img src={vtol} alt="VTOL" className="w-10 h-10" />
          <h1 className="hidden md:block mr-auto ml-4 text-lg font-medium tracking-wider text-white">VishGround</h1>
          <nav>
            <div
              className={`fixed top-0 left-0 bottom-0 ${
                showMenu ? "translate-x-0" : "-translate-x-full"
              } md:static md:translate-x-0 flex flex-col justify-center md:flex-row gap-10 p-8 w-60 md:w-full md:p-0 bg-black border-r border-blue-500 md:border-0 tracking-wide ease-in-out duration-300`}
            >
              <div onClick={() => setShowMenu((prev) => !prev)}>
                <Link href="/">
                  <a className="text-white hover:text-blue-400">Home</a>
                </Link>
              </div>
              <div onClick={() => setShowMenu((prev) => !prev)}>
                <Link href="/">
                  <a className="text-white hover:text-blue-400">About</a>
                </Link>
              </div>
              <div onClick={() => setShowMenu((prev) => !prev)}>
                <Link href="/">
                  <a className="text-white hover:text-blue-400">Service</a>
                </Link>
              </div>
              <div onClick={() => setShowMenu((prev) => !prev)}>
                <Link href="/">
                  <a className="text-white hover:text-blue-400">Contact Us</a>
                </Link>
              </div>
            </div>
          </nav>
          <button
            onClick={() => (document.location.href = "https://abdfikih.site")}
            className="flex items-center ml-auto md:ml-16 px-4 h-10 rounded-lg bg-transparent text-white border border-emerald-700 hover:bg-blue-700  hover:border-blue-700"
          >
            <ArrowCircleRightIcon className="w-6 h-6" />
            <p className="ml-2 uppercase text-sm font-medium tracking-wide">GET STARTED</p>
          </button>
        </div>
      </header>
    </div>
  );
}
