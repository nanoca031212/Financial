import { Button } from "@/components/ui/button";
import Image from "next/image";
const header = () => {
  return (
    <div className="fixed border-b-[1px] border-[#525252] border-solid top-0 left-0 z-50 bg-[#121212] text-white py-5 px-12 w-full shadow-md">
      <div className="flex justify-between  items-center">
        <Image
          src="/LogoWhite.svg"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-44 h-auto"
        />
        <div className="flex items-center gap-9">
          <div>
            <ul className="flex items-center gap-9">
              <li className="text-base cursor-pointer hover:text-white/90">
                Atuação
              </li>
              <li className="text-base cursor-pointer hover:text-white/90">
                Experiência
              </li>
            </ul>
          </div>
          <Button
            variant="outline"
            className=" px-8 py-2 text-base text-[#121212] rounded-none"
          >
            Conversa estratégica
          </Button>
        </div>
      </div>
    </div>
  );
};

export default header;
