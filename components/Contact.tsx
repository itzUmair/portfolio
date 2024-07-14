import ContactForm from "./ContactForm";
import Social from "./Social";

export default function Contact() {
  return (
    <section id="contact">
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
          link="mailto:muhammadumair2511@gmail.com"
        />
        <Social
          image="/resume.png"
          alt="Resume"
          text="my resume"
          link="https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Resume.pdf?alt=media&token=8529f9ce-7069-4806-a9d8-131310d70533"
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
        <ContactForm />
      </div>
    </section>
  );
}
