import Image from "next/image";

const cardtext = () => {
  return (
    <div className=" p-20 bg-[#121212]  ">
      <div className="container mx-auto flex flex-arrow gap-6">
        <div className="bg-[#2D2D2D] flex flex-col  gap-10 py-[165px] leading-[140%]  border-l-16 border-[#FAF9F6] p-16  w-1/2">
          <div className="text-[#FAF9F6]  ">
            <p className="px-16 md:max-w-[650px] text-2xl">
              A intervenção é orientada pelo momento estrutural da empresa, não
              por um escopo pré-definido. O objetivo é consolidar uma base capaz
              de sustentar o próximo ciclo com consistência.
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="Michel-section.webp"
            src="/Cliente-e-michel.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default cardtext;
