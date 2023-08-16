import BoxFact from "@/components/BoxFact";

export default function Home() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Iván Henríquez.</h1>
          <strong className="text-3xl sm:text-5xl font-extrabold text-red-700 sm:block">
            Generador de curiodades.
          </strong>

          <p className="mt-4 sm:text-xl/relaxed">
            Prepárate para explorar preguntas que ni siquiera sabías que tenías y
            sumergirte en datos sorprendentes que ampliarán tus horizontes.
          </p>

          <BoxFact />
        </div>
      </div>
    </section>
  );
}
