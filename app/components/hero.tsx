import Image from "next/image";

const hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/bghero.webp"
        alt="background"
        fill
        priority
        className="object-cover  object-[center_20%]"
      />
    </div>
  );
};

export default hero;
