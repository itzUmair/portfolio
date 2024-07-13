import Button from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-16">
      <h2 className="text-xl lg:text-2xl">Hey visitor!</h2>
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl leading-[60px] md:leading-[80px] lg:leading-[130px]">Welcome To <br /> The Portfolio Of <br /> Muhammad Umair Khan</h1>
      <div className="flex gap-x-8 my-4">
        <Button content="Resume"/>
        <Button content="Let&apos;s Connect" image="/arrow.png"/>
      </div>
      <div className="flex justify-center">
        <button className="my-8"><Image src="/scroll-icon.png" alt="scroll" width={50} height={50} className="w-9 h-9 lg:w-12 lg:h-12" /></button>
      </div>
    </section>
  )
}
