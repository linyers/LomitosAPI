import { useEffect, useContext } from "react";
import PathsContext from '../context/PathsContext'

function PostmanPage() {
  const { setPageNav } = useContext(PathsContext);

  useEffect(() => {
    setPageNav([]);
  }, []);

  return (
    <>
      <h2 className="font-bold text-6xl mb-8">Postman</h2>

      <p className="text-lg mb-8">
        Postman simplifica cada paso del ciclo de vida de la API y agiliza la
        colaboración para que puedas crear mejores API y más rápido.
      </p>

      <img className="mb-8" src="postman.png" alt="" />

      <p className="text-lg">
        Descargue el{" "}
        <a
          className="text-blue-400 hover:text-blue-500"
          href="Lomitos API.postman_collection.json"
          download
        >
          archivo JSON de Postman
        </a>{" "}
        para importarlo en la aplicación Postman.
      </p>
    </>
  );
}

export default PostmanPage;
