"use client";
import { useEffect, useState } from "react";

const BoxFact = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    generarDatos();
  }, []);

  const generarDatos = async () => {
    let response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`);
    let data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <div>
      <div className="border rounded my-">
        <p className="p-2">
          <strong>Sabias que: </strong>
          {data.text}
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={generarDatos}
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        >
          Generar
        </button>
      </div>
    </div>
  );
};

export default BoxFact;
