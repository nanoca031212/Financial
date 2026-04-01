import Image from "next/image";

const section = () => {
  return (
    <div className="bg-[#121212] space-y-12 py-24 px-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-[#FAF9F6]">
          Crescimento exige estrutura.
        </h1>
        <p className="text-[24px] text-[#FAF9F6B2]/70 md:max-w-[900px] ">
          Gestão financeira madura organiza prioridades, disciplina recursos e
          sustenta decisões capazes de preservar valor ao longo do tempo.
        </p>
      </div>
      <div className="flex gap-8 ">
        <Image
          src="/Structure.webp"
          alt="Structure"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[600px]"
        />
        <Image
          src="/Michel-section.webp"
          alt="Michel-section"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[600px]"
        />
      </div>
      <div>
        <p className="text-[24px] text-[#FAF9F6B2]/70 font-regular md:max-w-[820px] ">
          <span className="text-[#FAF9F6] font-semibold ">
            {" "}
            {"Michel Stawicki"}
          </span>{" "}
          conduz intervenções estruturadas em gestão financeira para empresas
          que desejam fortalecer a base que sustenta seu crescimento.
        </p>
      </div>
    </div>
  );
};

export default section;
