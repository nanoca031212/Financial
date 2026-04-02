const ExperienceCard = () => {
  return (
    <div className="w-full">
      <div className="bg-[#1A1A1ACC]/100 border border-[#333333] py-8 px-16 backdrop-blur-md shadow-2xl">
        <div className=" flex items-center container mx-auto justify-between gap-12">
          <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
            Trajetória associada à construção deliberada de estruturas
            financeiras robustas... Hoje essa experiência é aplicada a{" "}
            <strong className="text-white font-semibold">
              empresas que desejam fortalecer sua estrutura financeira
            </strong>{" "}
            e elevar o padrão de suas decisões estratégicas
          </p>
          <div className="bg-[#222222]/90 border border-[#333333] py-8 px-12 rounded-lg text-center shadow-lg">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
              Experiência
            </p>
            <h1 className="text-6xl font-bold text-white tracking-tight">
              +30
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
