import { useState, useContext } from "react";
import PathsContext from '../context/PathsContext'

export default function Header() {
  const { open, setOpen } = useContext(PathsContext);

  return (
    <header className="fixed w-full flex justify-between flex-row bg-slate-900 top-0 left-0 right-0">
      <h1 className="text-4xl font-bold md:my-8 md:mx-14 my-6 ml-5">
        The Lomitos API
      </h1>

      <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
    </header>
  );
}
