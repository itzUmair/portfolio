// import Image from "next/image";
// import Link from "next/link";

// export default function Button({
//   content,
//   image,
//   link,
// }: {
//   content: string;
//   image?: string;
//   link?: string;
// }) {
//   const defaultButton = (
//     <button className="border-2 border-white px-4 py-2 flex items-center gap-x-2 text-xl lg:text-2xl hover:bg-white transition-colors">
//       {content}

//       {image && (
//         <Image
//           src={image}
//           alt="&rarr;"
//           width={20}
//           height={20}
//           className="rotate-90 w-3 h-3 lg:w-5 lg:h-5"
//         />
//       )}
//     </button>
//   );

//   return link ? (
//     <Link href={link} target="_blank">
//       {defaultButton}
//     </Link>
//   ) : (
//     defaultButton
//   );
// }

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
    <button className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-transparent  group py-1.5 px-2.5 border-2 border-white text-xl lg:text-2xl">
      <span className="w-10 h-48 rotate-45 rounded bg-white absolute bottom-0 left-0 translate-x-[300%] ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-[-100%]"></span>
      <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out flex items-center gap-x-2">
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
      </span>
    </button>
  );

  return link ? (
    <Link href={link} target="_blank">
      {defaultButton}
    </Link>
  ) : (
    defaultButton
  );
}
