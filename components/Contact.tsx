import Social from "./Social";

export default function Contact() {
  return (
    <section>
      <h2 className="font-bold text-3xl lg:text-6xl leading-[45px] lg:leading-[90px] lg:text-center">
        Contact Me
      </h2>
      <p className="lg:text-2xl lg:text-center">Let&apos;s Connect</p>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-8 mt-8 lg:mt-16 w-fit lg:mx-auto">
        <Social
          image="/linkedin.png"
          alt="Linkedin"
          text="linkedin.com/in/umair2511"
          link="https://linkedin.com/in/umair2511"
        />
        <Social
          image="/github.png"
          alt="Github"
          text="github.com/itzUmair"
          link="https://github.com/itzUmair"
        />
        <Social
          image="/gmail.png"
          alt="Gmail"
          text="muhammadumair2511@gmail.com"
          link=""
        />
        <Social
          image="/resume.png"
          alt="Resume"
          text="my resume"
          link="/resume"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-16 mt-8 lg:mt-32">
        <div className="flex-1 flex flex-col gap-y-4 lg:gap-y-8 max-w-[60ch] text-justify lg:text-2xl">
          <p className="lg:leading-[40px]">
            Hello there! Thank you for visiting my portfolio website. Whether
            you have a project in mind, a collaboration proposal, or simply want
            to say hi, I&apos;d love to hear from you.
          </p>
          <p className="lg:leading-[40px]">
            Feel free to use the contact form to drop me a message. I&apos;ll do
            my best to get back to you as soon as possible.
          </p>
          <p className="lg:leading-[40px]">
            Best regards,
            <br />
            Muhammad Umair Khan
          </p>
        </div>
        <form action="" className="flex flex-col flex-1 gap-y-4">
          <input
            className="bg-transparent border-2 border-white outline-none px-4 py-2 lg:text-2xl"
            type="text"
            name="name"
            id="name"
            placeholder="Your good name"
          />
          <input
            className="bg-transparent border-2 border-white outline-none px-4 py-2 lg:text-2xl"
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
          />
          <textarea
            className="bg-transparent border-2 border-white outline-none px-4 py-2 lg:text-2xl min-h-40"
            name="message"
            id="message"
            placeholder="What's on your mind?"
          ></textarea>
          <button
            type="submit"
            className="border-2 border-white w-fit ml-auto px-4 py-2 flex items-center gap-x-2 text-xl lg:text-2xl"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
