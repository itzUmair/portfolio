import Image from "next/image"

export default function Button({content, image} : {content: string, image?: string}) {
  return (
    <button className="border-2 border-white px-4 py-2 flex items-center gap-x-2 text-xl lg:text-2xl">
      {content}

      {image && <Image 
        src={image}
        alt="&rarr;"
        width={20}
        height={20}
        className="rotate-90 w-3 h-3 lg:w-5 lg:h-5"
      />}
    </button>
  )
}
