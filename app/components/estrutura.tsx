import { Button } from "@/components/ui/button";
import Image from "next/image";

const estrutura = () => {
  return (
    <div className=" bg-[#1A1A1A] space-y-12 py-24 px-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-[#FAF9F6]">
          Estrutura que Sustenta Decisões Financeiras
        </h1>
        <p className="text-[24px] text-[#FAF9F6B2]/70 md:max-w-[900px] ">
          Quando a complexidade aumenta, pontos isolados deixam de ser o
          problema. O que precisa evoluir é a base
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 w-full">
          <div className="bg-[#2D2D2D] flex flex-col gap-10   border-l-16 border-[#FAF9F6] p-16  w-full">
            <div>
              <Image
                src="/bloco1.svg"
                alt="bloco1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-[96px]"
              />
            </div>
            <div className="text-[#FAF9F6B2]/70  ">
              <p className="pr-16 text-xl">
                Reorganização da lógica de rentabilidade
              </p>
            </div>
          </div>

          <div className="bg-[#2D2D2D] flex flex-col gap-10 p-16  w-full">
            <div>
              <Image
                src="/bloco2.svg"
                alt="bloco1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-[96px]"
              />
            </div>
            <div className="text-[#FAF9F6B2]/70  ">
              <p className="pr-16 text-xl">
                Redefinição dos instrumentos de decisão
              </p>
            </div>
          </div>

          <div className="bg-[#2D2D2D] flex flex-col gap-10 p-16  w-full">
            <div>
              <Image
                src="/bloco3.svg"
                alt="bloco1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-[96px]"
              />
            </div>
            <div className="text-[#FAF9F6B2]/70  ">
              <p className="pr-16 text-xl">
                Reorganização da lógica de rentabilidade
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 w-full">
          <div className="bg-[#2D2D2D] flex flex-col gap-10 p-16  w-full">
            <div>
              <Image
                src="/bloco4.svg"
                alt="bloco1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-[96px]"
              />
            </div>
            <div className="text-[#FAF9F6B2]/70  ">
              <p className="pr-16 text-xl">
                Reorganização da lógica de rentabilidade
              </p>
            </div>
          </div>
          <div className="bg-[#2D2D2D] flex flex-col gap-10 p-16  w-full">
            <div>
              <Image
                src="/bloco5.svg"
                alt="bloco1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-[96px]"
              />
            </div>
            <div className="text-[#FAF9F6B2]/70  ">
              <p className="pr-16 text-xl">
                Reorganização da lógica de rentabilidade
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          variant="outline"
          className=" border text-lg bg-[#1A1A1A] border-[#FAF9F6]-3 hover:border-none hover:bg-[#828282] hover:text-[#FAF9F6] text-[#FAF9F6] rounded-none px-12 py-6 "
        >
          Saber mais sobre a metodologia
        </Button>
      </div>
    </div>
  );
};

export default estrutura;
