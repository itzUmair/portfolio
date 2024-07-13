import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-between items-center my-4 lg:my-8">
        <Image
          src="/logo.png"
          alt="Umair"
          width={50}
          height={50}
          className="w-10 h-10 lg:w-12 lg:h-12"
        />
        <ul className="flex gap-x-4">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
    </header>
  )
}
