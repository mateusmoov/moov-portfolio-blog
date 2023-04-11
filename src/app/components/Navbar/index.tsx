import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between ">
      <Image src="/logo.svg" priority width="73" height="64" alt="Logo" />
      <div className="flex gap-x-8 font-sans font-light">
        <a href="/">Blog</a>
        <a href="/">Projetos</a>
        <a href="/">Sobre Mim</a>
        <a href="/">He4rt</a>
      </div>
    </div>
  );
};
