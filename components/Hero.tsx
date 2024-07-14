import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen pt-32 md:h-auto md:pt-24">
      <h2 className="text-xl lg:text-2xl">Hey visitor!</h2>
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl leading-[60px] md:leading-[80px] lg:leading-[130px]">
        Welcome To <br /> The Portfolio Of <br /> Muhammad Umair Khan
      </h1>
      <div className="flex gap-x-8 my-4">
        <Button
          content="Resume"
          link="https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Resume.pdf?alt=media&token=8529f9ce-7069-4806-a9d8-131310d70533"
        />
        <Button content="Let's Connect" image="/arrow.png" link="#contact" />
      </div>
      <div className="flex justify-center">
        <button className="my-8">
          <Image
            src="/scroll-icon.png"
            alt="scroll"
            width={50}
            height={50}
            className="w- lg:w-12 lg:h-12"
          />
        </button>
      </div>
    </section>
  );
}
