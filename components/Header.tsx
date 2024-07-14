import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="my-4 lg:my-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Umair"
          width={50}
          height={50}
          className="w-10 h-10 lg:w-12 lg:h-12"
        />
      </Link>
    </nav>
  );
}
