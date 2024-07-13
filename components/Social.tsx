import Image from "next/image";
import Link from "next/link";

export default function Social({image, alt, text, link}: {image:string, alt:string, text:string, link:string}) {
  return (
    <div className="flex items-center gap-x-8 lg:gap-x-11">
      <Image 
        src={image}
        alt={alt}
        width={60}
        height={60}
        className="w-5 h-5 lg:w-10 lg:h-10"
      />
      <Link href={link} target="_blank" className="text-wrap lg:text-2xl">{text}</Link>
    </div>
  )
}
