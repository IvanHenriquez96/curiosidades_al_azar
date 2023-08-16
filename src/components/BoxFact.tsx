"use client";
import { useEffect, useState } from "react";

type DatosApi = {
  text: string;
};

const BoxFact = () => {
  const [data, setData] = useState<any>("");

  useEffect(() => {
    generarDatos();
  }, []);

  const generarDatos = async () => {
    let response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random`);
    let data = await response.json();

    let responseTraduccion = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURI(
        data.text
      )}`
    );

    let dataTraducida = await responseTraduccion.json();
    let traduccion = dataTraducida[0][0][0];
    setData(traduccion);
  };

  return (
    <div>
      <div className="border border-red-600 rounded my-10 animate-fade">
        <p className="p-2">
          <strong>Sabías que... </strong>
          {data}
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={generarDatos}
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        >
          Ya lo sabía... &#128564;
        </button>
        <button
          onClick={generarDatos}
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        >
          Eso es nuevo &#128550;
        </button>
        <button
          onClick={generarDatos}
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        >
          QUE?! &#128552;
        </button>
      </div>
    </div>
  );
};

export default BoxFact;
