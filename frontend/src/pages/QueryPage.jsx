import { useContext, useEffect } from "react";
import PathsContext from "../context/PathsContext";
import ApiEndpoint from "../components/ApiEndpoint";

function QueryPage() {
  const { setPageNav } = useContext(PathsContext);

  const nav = [
    {
      id: "#filter-lomitos",
      name: "Filter lomitos",
    },
    {
      id: "#filter-by-rating",
      name: "Filter by rating",
    },
    {
      id: "#filter-by-time",
      name: "Filter by time",
    },
    {
      id: "#join-filters",
      name: "Join filters",
    },
  ];

  useEffect(() => {
    setPageNav(nav);
  }, []);

  return (
    <>
      <h2 className="font-bold text-6xl mb-16">Query's</h2>

      <section className="flex flex-col gap-10">
        <ApiEndpoint
          id="filter-lomitos"
          title="Filter lomitos"
          description={
            'Se puede filtrar por medio de los atributos "name" y/o "phone" como parametro.'
          }
          request="[GET] https://lomitosapi.com.ar/api/lomitos/?name=GATO"
        />

        <ApiEndpoint
          id="filter-by-rating"
          title="Filter by rating"
          description={
            'Se puede filtrar por medio de los atributos "rate" y/o "reviews" como parametro.'
          }
          request="[GET] https://lomitosapi.com.ar/api/lomitos/?rate=4.0"
        />

        <ApiEndpoint
          id="filter-by-time"
          title="Filter by time"
          description={
            'Para filtrar por el tiempo debemos poner primero si es dia ("d") o noche ("n") y el dia de la semana separados por "_" como parametro.'
          }
          request="[GET] https://lomitosapi.com.ar/api/lomitos/?n_monday=20:00-00:00"
        />

        <ApiEndpoint
          id="join-filters"
          title="Join filters"
          description={
            'Se puede filtrar los lomitos usando varios parametros de consultas y juntarlos a todos, los parametros se separan por medio de "&". En este ejemplo queremos las lomiterias que abren las 24 horas.'
          }
          request="[GET] https://lomitosapi.com.ar/api/lomitos/?d_sunday=00:00-11:59&n_sunday=12:00-23:59"
        />
      </section>
    </>
  );
}

export default QueryPage;
