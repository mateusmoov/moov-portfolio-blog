import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex relative items-center h-[738px] mt-20">
      <div className="z-20 flex justify-center flex-col">
        <p className="text-4xl">bom dia.</p>
        <h1 className="text-6xl font-extrabold">Mateus ou Moov, prazer!</h1>
        <div className="w-[458px]">
          <span className="text-2xl">
            Tenho 21 anos, sou Fullstack Developer mais focado no Frontend,
            trabalhando atualmente na <a href="/">4Linux</a>.
          </span>
        </div>
        <div>
          <a href="">github</a>
          <a href="">linkedin</a>
          <a href="">twitch</a>
          <a href="">twitter</a>
        </div>
      </div>
      <div>
        <Image
          src="/me.png"
          alt="me"
          width="408"
          height="738"
          unoptimized={true}
          className="absolute top-0 right-0 z-10"
        />
      </div>
    </div>
  );
};
