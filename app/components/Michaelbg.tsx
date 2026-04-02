import Image from "next/image";

const michaelbg = () => {
  return (
    <div className="relative bg-[#121212] w-full">
      <Image
        alt="Michel-section.webp"
        src="/Foto-Michel-4.jpg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
      {/* Overlay de gradiente suave no topo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/100 via-[#121212]/40 to-transparent h-[25%] pointer-events-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-start gap-6 px-4 text-center">
        <h1 className="font-bold text-5xl text-[#FAF9F6] ">Atuação Global</h1>
        <p className="text-[#FAF9F6] text-2xl max-w-4xl">
          <span className=" font-bold"> Mais de 30 anos de atuação</span> em
          finanças em ambientes industriais, corporativos e de projetos no
          <span className=" font-bold"> Brasil, Argentina e África...</span>
        </p>
      </div>
    </div>
  );
};

export default michaelbg;
