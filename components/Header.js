import { useRouter } from "next/router";
import { ArrowCircleRightIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 md:-top-12 z-50 flex justify-between items-center h-20 md:h-32 px-4 md:px-8 bg-black border-b border-black">
      <div className="sticky top-0 flex md:justify-between items-center h-20 w-full">
        <button onClick={() => setShowMenu((prev) => !prev)} className="focus:outline-none block mr-4 md:hidden">
          {showMenu ? <XIcon className="w-8 h-8 text-white" /> : <MenuIcon className="w-8 h-8 text-white" />}
        </button>
        <h1 className="hidden md:block mr-auto ml-4 text-lg font-medium tracking-wider text-white">VishGround</h1>
        <nav>
          <div
            className={`fixed top-20 left-0 bottom-0 ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            } md:static md:translate-x-0 flex flex-col justify-center md:flex-row gap-10 p-8 w-60 md:w-full md:p-0 bg-black border-r border-gray-200 md:border-0 tracking-wide ease-in-out duration-300`}
          >
            <div onClick={() => setShowMenu((prev) => !prev)}>
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
            </div>
            <div onClick={() => setShowMenu((prev) => !prev)}>
              <Link href="/">
                <a className="text-white">About</a>
              </Link>
            </div>
            <div onClick={() => setShowMenu((prev) => !prev)}>
              <Link href="/">
                <a className="text-white">Service</a>
              </Link>
            </div>
            <div onClick={() => setShowMenu((prev) => !prev)}>
              <Link href="/">
                <a className="text-white">Contact Us</a>
              </Link>
            </div>
          </div>
        </nav>
        <button onClick={() => (document.location.href = "https://abdfikih.site")} className="flex items-center ml-auto md:ml-16 px-4 h-10 rounded-lg bg-blue-500 text-white hover:bg-blue-700 focus:outline-none">
          <ArrowCircleRightIcon className="w-6 h-6" />
          <p className="ml-2 uppercase text-sm font-medium tracking-wide">GET STARTED</p>
        </button>
      </div>
    </div>
  );
}
