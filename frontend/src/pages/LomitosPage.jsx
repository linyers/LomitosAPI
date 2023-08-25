import { useContext, useEffect } from "react";
import PathsContext from '../context/PathsContext'

export default function LomitosPage() {
  const { setPageNav } = useContext(PathsContext);

  const nav = [{
    id: "#get-all-lomitos",
    name: "Get all lomitos",
  },
  {
    id: "#get-a-single-lomito",
    name: "Get a single lomito",
  }]

  useEffect(() => {
    setPageNav(nav);
  }, [])

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-6xl mb-16">Lomitos</h2>

      <h3 id="get-all-lomitos" className="font-bold text-3xl mb-5">
        Get all lomitos
      </h3>

      <p className="text-lg mb-5">
        Para acceder a todos los lomitos en la api puedes usar el endpoint{" "}
        <code className="bg-zinc-950 text-base px-1 py-0.5 rounded">/lomitos/</code>
      </p>

      <p className="text-lg mb-5">Request:</p>
      <code className="mb-5 text-base bg-zinc-950 p-4 rounded overflow-auto">
        [GET] https://api.escuelajs.co/api/lomitos/
      </code>

      <p className="text-lg mb-5">Response:</p>
      <code className="text-base mb-5 bg-zinc-950 p-4 rounded overflow-auto">
        <pre>
{
`[
  {
      "id": 4,
      "title": "Handmade Fresh Table",
      "price": 687,
      "description": "Andy shoes are designed to keeping in...",
      "category": {
        "id": 5,
        "name": "Others",
        "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
        },
      "images": [
        "https://placeimg.com/640/480/any?r=0.9178516507833767",
        "https://placeimg.com/640/480/any?r=0.9300320592588625",
        "https://placeimg.com/640/480/any?r=0.8807778235430017"
      ]
    }
  // ...
]`
}
        </pre>
      </code>

      <h3 id="get-a-single-lomito" className="font-bold text-3xl mb-5">
        Get a single lomito
      </h3>

      <p className="text-lg mb-5">
        Para acceder a un unico lomito ingresa su id como parametro <code className="bg-zinc-950 text-base px-1 py-0.5 rounded">{`/lomitos/<id>/`}</code>
      </p>

    </div>
  );
}
