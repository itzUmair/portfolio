import Image from "next/image";
import Link from "next/link";

export default function Button({
  content,
  image,
  link,
}: {
  content: string;
  image?: string;
  link?: string;
}) {
  const defaultButton = (
    <button className="border-2 border-white px-4 py-2 flex items-center gap-x-2 text-xl lg:text-2xl">
      {content}

      {image && (
        <Image
          src={image}
          alt="&rarr;"
          width={20}
          height={20}
          className="rotate-90 w-3 h-3 lg:w-5 lg:h-5"
        />
      )}
    </button>
  );

  return link ? <Link href={link}> {defaultButton} </Link> : defaultButton;
}
