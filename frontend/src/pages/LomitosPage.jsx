import { useContext, useEffect } from "react";
import PathsContext from "../context/PathsContext";
import ApiEndpoint from "../components/ApiEndpoint";
import LomitoSchema from "../components/LomitoSchema";
import RatingSchema from "../components/RatingSchema";
import TimeSchema from "../components/TimeSchema";

export default function LomitosPage() {
  const { setPageNav } = useContext(PathsContext);

  const nav = [
    {
      id: "#get-all-lomitos",
      name: "Get all lomitos",
    },
    {
      id: "#get-a-single-lomito",
      name: "Get a single lomito",
    },
    {
      id: "#create-a-lomito",
      name: "Create a lomito",
    },
    {
      id: "#update-a-lomito",
      name: "Update a lomito",
    },
    {
      id: "#delete-a-lomito",
      name: "Delete a lomito",
    },
    {
      id: "#pagination",
      name: "Pagination",
    },
    {
      id: "#schema-lomito",
      name: "Schema Lomito",
    },
    {
      id: "#schema-rating",
      name: "Schema Rating",
    },
    {
      id: "#schema-time",
      name: "Schema Time",
    },
  ];

  useEffect(() => {
    setPageNav(nav);
  }, []);

  return (
    <>
      <h2 className="font-bold text-6xl mb-16">Lomitos</h2>

      <section className="flex flex-col gap-10">
        <ApiEndpoint
          id="get-all-lomitos"
          title="Get all lomitos"
          description={
            "Para acceder a todos los lomitos en la api puedes usar el endpoint "
          }
          endpoint="/lomitos/"
          request="[GET] https://lomitosapi.com.ar/api/lomitos/"
          response={`[
  // ...
    {
      "id": 8,
      "name": "Lomiteria Guilly",
      "phone": "0385 535-3433",
      "maps": "https://goo.gl/maps/kaJ25nf6HANH8Yvt9",
      "logo": null,
      "rating": {
        "rate": "4.30",
        "reviews": 262
      },
      "day_time": {
        "sunday": "08:00-12:00",
        "monday": "08:00-00:00",
        // ...
      },
      "night_time": {
        // ...
      }
    },
  // ...
]`}
        />

        <ApiEndpoint
          id="get-a-single-lomito"
          title="Get a single lomito"
          description={
            "Para acceder a un unico lomito ingresa su id como parametro "
          }
          endpoint="/lomitos/<id>/"
          request="[GET] https://lomitosapi.com.ar/api/lomitos/1/"
          response={`{
  "id": 8,
  "name": "Lomiteria Guilly",
  "phone": "0385 535-3433",
  "maps": "https://goo.gl/maps/kaJ25nf6HANH8Yvt9",
  "logo": null,
  "rating": {
    "rate": "4.30",
    "reviews": 262
  },
  "day_time": {
    "sunday": "08:00-12:00",
    "monday": "08:00-00:00",
    // ...
  },
  "night_time": {
    // ...
  }
}`}
        />

        <ApiEndpoint
          id="create-a-lomito"
          title="Create a lomito"
          description={
            "Puede crear un nuevo lomito enviando un objeto como el siguiente a "
          }
          endpoint="/lomitos/"
          request={`[POST] https://lomitosapi.com.ar/api/lomitos/
# Body
{
  "name": "Pepi",
  "phone": "0385 666-1234",
  "maps": "https://www.google.com/maps/@-27.7849383,-64.258345,3a,75y,220.68h,84.23t/data=!3m6!1e1!3m4!1sWG_p7LGD4Mam8D7-hWz6yQ!2e0!7i16384!8i8192?entry=ttu",
  "rating": {
    "rate": "5",
    "reviews": 666
  }
}`}
          response={`{
  "id": 122,
  "name": "Pepi",
  "phone": "0385 666-1234",
  "maps": "https://www.google.com/maps/@-27.7849383,-64.258345,3a,75y,220.68h,84.23t/data=!3m6!1e1!3m4!1sWG_p7LGD4Mam8D7-hWz6yQ!2e0!7i16384!8i8192?entry=ttu",
  "logo": null,
  "rating": {
    "rate": "5.00",
    "reviews": 666
  },
  "day_time": {
    "sunday": null,
    // ...
  },
  "night_time": {
    "sunday": null,
    // ..
  }
}`}
          note='Al crear un nuevo lomito el campo "name" es el unico campo obligatorio.'
        />

        <ApiEndpoint
          id="update-a-lomito"
          title="Update a lomito"
          description={
            "Puede modificar un lomito enviando un objeto como el siguiente y su id como parametro: "
          }
          endpoint="/lomitos/<id>"
          request={`[PUT] https://lomitosapi.com.ar/api/lomitos/122/
# Body
{
  "name": "Pepi",
  "day_time": {
    "friday": "21:00-04:00"
  }
}`}
          response={`{
  "id": 122,
  "name": "Pepi God Nights",
  // ...
  "day_time": {
    // ...
    "friday": "21:00-04:00",
    "saturday": null
  },
  "night_time": {
    // ...
  }
}`}
          note='Al igual que crear un nuevo lomito el campo "name" es obligatorio.'
        />

        <ApiEndpoint
          id="delete-a-lomito"
          title="Delete a lomito"
          description={"Puede eliminar un lomito con su id como parametro: "}
          endpoint="/lomitos/<id>"
          request={`[DELETE] https://lomitosapi.com.ar/api/lomitos/122/`}
          response={``}
          note="Al eliminar un lomito si la operacion es exitosa dara como resultado un codigo 204 y no entregara nada en el response."
        />

        <ApiEndpoint
          id="pagination"
          title="Pagination"
          description={
            'Cada pagina de esta API tiene un limite de 15 lomitos por pagina, no se puede subir o bajar el limite. En todos los responses GET a varios lomitos encontraremos informacion adicional como el numero total de lomitos, la pagina siguiente, la pagina anterior y los resultados. Puedes cambiar de paginas usando el parametro "p" y el numero de pagina: '
          }
          endpoint="/lomitos/?p=<page>"
          request={`[GET] https://lomitosapi.com.ar/api/lomitos/?p=2`}
          response={`{
  "count": 120,
  "next": "https://lomitosapi.com.ar/api/lomitos/?p=3",
  "previous": "https://lomitosapi.com.ar/api/lomitos/",
  "results": [
    // ...
]`}
        />

        <article className="flex flex-col">
          <h3 id="schema-lomito" className="font-bold text-3xl mb-5">
            Schema Lomito
          </h3>
          <LomitoSchema />
        </article>

        <article className="flex flex-col">
          <h3 id="schema-rating" className="font-bold text-3xl mb-5">
            Schema Rating
          </h3>
          <RatingSchema />
        </article>

        <article className="flex flex-col">
          <h3 id="schema-time" className="font-bold text-3xl mb-5">
            Schema Day Time and Night Time
          </h3>
          <TimeSchema />
        </article>
      </section>
    </>
  );
}
