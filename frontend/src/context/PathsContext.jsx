import { useState, createContext } from "react";

const PathsContext = createContext();
export default PathsContext;

export function PathsProvider({ children }) {
  const [actualPath, setActualPath] = useState(window.location.pathname);
  const [pageNav, setPageNav] = useState([]);

  const paths = [
    {
      name: "Introduccion",
      path: "/",
    },
    {
      name: "Lomitos",
      path: "/lomitos",
    },
    {
      name: "Query's",
      path: "/querys",
    },
    {
      name: "Authentication",
      path: "/authentication",
    },
  ];

  let contextData = {
    paths: paths,
    actualPath: actualPath,
    setactualPath: setActualPath,
    setPageNav: setPageNav,
    pageNav: pageNav,
  };

  return (
    <PathsContext.Provider value={contextData}>
      {children}
    </PathsContext.Provider>
  );
}
