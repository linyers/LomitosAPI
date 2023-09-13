import React from "react";

function ApiEndpoint({
  id,
  title,
  description,
  endpoint,
  request,
  response,
  note,
}) {
  return (
    <article className="flex flex-col">
      {title ? (
        <>
          <h3 id={id} className="font-bold text-3xl mb-5">
            {title}
          </h3>
        </>
      ) : null}

      <p className="text-lg mb-5">
        {description}
        {endpoint ? (
          <>
            <code className="bg-zinc-950 text-base px-1 py-0.5 rounded">
              {endpoint}
            </code>
          </>
        ) : null}
      </p>

      <p className="text-lg mb-5">Request:</p>
      <code className="mb-5 text-base bg-zinc-950 p-4 rounded overflow-auto">
        <pre>{request}</pre>
      </code>

      {response ? (
        <>
          <p className="text-lg mb-5">Response:</p>
          <code
            className="text-base mb-5 bg-zinc-950 p-4 rounded overflow-auto"
          >
            <pre>{response}</pre>
          </code>
        </>
      ) : null}

      {note ? (
        <blockquote className="p-4 bg-zinc-950 mb-5 border-x-2">
          <p>Nota: {note}</p>
        </blockquote>
      ) : null}
    </article>
  );
}

export default ApiEndpoint;
