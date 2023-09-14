import { useState, createContext, useEffect } from "react";

const PathsContext = createContext();
export default PathsContext;

export function PathsProvider({ children }) {
  const [actualPath, setActualPath] = useState(window.location.pathname);
  const [pageNav, setPageNav] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActualPath(window.location.pathname)
  }, [window.location.pathname])


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
    setActualPath: setActualPath,
    setPageNav: setPageNav,
    pageNav: pageNav,
    open, 
    setOpen
  };

  return (
    <PathsContext.Provider value={contextData}>
      {children}
    </PathsContext.Provider>
  );
}
