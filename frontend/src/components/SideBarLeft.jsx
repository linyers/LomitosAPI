import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PathsContext from "../context/PathsContext";

export default function SideBarLeft() {
  const { actualPath, paths, open, setOpen } = useContext(PathsContext);

  return (
    <>
      <div className="md:inline-block hidden mt-7 fixed">
        <h3 className="text-xl font-bold">REST API</h3>
        <ul className="mt-1 text-lg">
          {paths.map((x, i) => {
            return (
              <li key={i}>
                <Link
                  className={`${
                    x.path == actualPath
                      ? "text-blue-500 cursor-default"
                      : "text-white"
                  } hover:text-blue-500 font-medium`}
                  to={x.path}
                >
                  {x.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <h3 className="text-xl font-semibold mt-10">RESOURCES</h3>
        <ul className="mt-1 text-lg">
          <li>
            <Link
              className={`${
                "/postman" == actualPath
                  ? "text-blue-500 cursor-default"
                  : "text-white"
              } hover:text-blue-500 font-medium`}
              to="/postman"
            >
              Postman
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 z-50 lg:hidden fixed top-0 left-0 right-0 shadow-md">
        <div
          className={`${
            !open && "hidden"
          } bg-slate-500/20 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
          onClick={() => setOpen(false)}
        ></div>

        <div
          className={`${
            open ? "w-52" : "w-0"
          } bg-slate-900/95 min-h-screen fixed top-0 left-0 transition-all duration-300`}
        >
          <div className={`${!open && "hidden"} pt-3`}>
            <button
              className="ml-4 text-white mb-14"
              onClick={() => setOpen(false)}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col justify-between items-center text-left gap-32">
              <div className="gap-2 flex flex-col">
                <h3 className="text-xl font-bold">REST API</h3>
                <ul className="mt-1 text-lg">
                  {paths.map((x, i) => {
                    return (
                      <li key={i}>
                        <Link
                          className={`${
                            x.path == actualPath
                              ? "text-blue-500 cursor-default"
                              : "text-white"
                          } hover:text-blue-500 font-medium`}
                          to={x.path}
                        >
                          {x.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <h3 className="text-xl font-semibold mt-10">RESOURCES</h3>
                <ul className="mt-1 text-lg">
                  <li>
                    <Link
                      className={`${
                        "/postman" == actualPath
                          ? "text-blue-500 cursor-default"
                          : "text-white"
                      } hover:text-blue-500 font-medium`}
                      to="/postman"
                    >
                      Postman
                    </Link>
                  </li>
                </ul>

                <div className="mt-40 text-lg">
                  <h3 className="font-bold">
                    ❮❯ by{" "}
                    <a
                      href="https://github.com/linyers"
                      className="text-blue-400 hover:text-blue-500"
                      target="blank"
                    >
                      Linyers
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
