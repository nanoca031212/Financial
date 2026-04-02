import React from "react";
import { Button } from "@/components/ui/button";

const ClaritySection = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-4 h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-[#121212] tracking-tight">
          Toda intervenção <br /> começa com clareza.
        </h2>

        <p className="text-xl md:text-2xl text-[#121212]/80 max-w-3xl mx-auto leading-relaxed">
          A Conversa Estratégica é um encontro estruturado para compreender a
          dinâmica do negócio e os desafios que impactam sua estrutura
          financeira
        </p>

        <div className="pt-4">
          <Button className="bg-[#121212] hover:bg-[#1A1A1A] text-[#FAF9F6] text-lg rounded-none px-10 py-7 transition-all duration-300">
            Agendar Conversa Estratégica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClaritySection;
