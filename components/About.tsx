export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row gap-y-8 gap-x-8 justify-between"
    >
      <div>
        <h2 className="font-bold text-3xl lg:text-6xl leading-[45px] lg:leading-[90px]">
          From Passion <br /> To Profession
        </h2>
        <p className="lg:text-2xl">The tale of my journey...</p>
      </div>
      <div className="flex flex-col gap-y-8  max-w-[60ch] text-justify lg:text-2xl">
        <p className="lg:leading-[40px]">
          Hey there! I&apos;m Muhammad Umair Khan, a Software Engineering
          student. I&apos;ve always been intrigued by how games and apps work,
          which led me to choose this field. During my research, I stumbled upon
          the fascinating world of web development. The more I dived into it,
          the more amazed I became by its endless possibilities.
        </p>
        <p className="lg:leading-[40px]">
          In the summer of 2019,decided to take up web development as a hobby.
          Little did I know that it would quickly evolve into a true passion of
          mine. Now, I&apos;m wholeheartedly pursuing web development as my
          chosen profession, fueled by my unwavering enthusiasm and dedication.
        </p>
      </div>
    </section>
  );
}
