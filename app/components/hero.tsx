import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

const hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] md:h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bghero.webp"
          alt="background"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
      </div>

      <div className="w-full  md:px-16  max-w-[1600px] mx-auto z-10">
        <h1 className="text-white text-3xl md:text-2xl lg:text-[32px] font-regular leading-snug max-w-[700px]">
          Estrutura financeira para sustentar crescimento com disciplina,
          clareza e consistência
        </h1>
      </div>

      

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-between items-end px-6 md:px-16  max-w-[1600px] z-10">
        <button className="flex items-center gap-2 border border-white/40 text-white/80 px-4 py-1.5 text-sm hover:text-white hover:border-white transition-all bg-black/10 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12  5v14M19 12l-7 7-7-7" />
          </svg>
          <span>Role</span>
        </button>

        <p className="text-white/90 text-sm text-right font-light leading-snug drop-shadow-lg p-2 rounded bg-black/10 backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none md:drop-shadow-none">
          Michel Stawicki -<br />
          Financial Structure.
        </p>
      </div>
    </div>
  );
};

export default hero;
