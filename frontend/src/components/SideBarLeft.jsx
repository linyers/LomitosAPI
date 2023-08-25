import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PathsContext from "../context/PathsContext";

export default function SideBarLeft() {
  const { actualPath, setActualPath, paths } = useContext(PathsContext);

  return (
    <div className="mt-7 fixed">
      <h3 className="text-xl font-bold">REST API</h3>
      <ul className="mt-1 text-lg">
        {paths.map((x, i) => {
          return (
            <li key={i}>
              <Link
                onClick={(e) => setActualPath(x.path)}
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
            onClick={(e) => setActualPath(x.path)}
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
  );
}
