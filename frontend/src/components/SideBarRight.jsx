import React from "react";
import { useContext } from "react";
import PathsContext from "../context/PathsContext";

export default function SideBarRight() {
  const { actualPath, pageNav } = useContext(PathsContext);

  if (actualPath === "/" || actualPath === "/postman") {
    return (
      <div className="mt-7 fixed right-14">
        <h3 className="text-xl font-bold">
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
    );
  }

  return (
    <div className="mt-7 fixed right-12">
      <h3 className="text-xl font-bold">On this page</h3>
      <ul className="mt-6">
        {pageNav.map((p, i) => {
          return (
            <li key={i} className="p-1">
              <a className="text-lg border-l-4 border-l-stone-600 hover:border-l-blue-500 px-5 py-2 text-white hover:text-blue-500" href={p.id}>
                {p.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
