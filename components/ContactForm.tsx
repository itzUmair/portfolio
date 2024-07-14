"use client";

import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { FormEvent, useState } from "react";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData(event.currentTarget);

    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    if (!name.trim() || !email.trim() || !message.trim() || false) {
      setErrorMessage("Please fill out all fields.");
    } else if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else if (!isValidName(name)) {
      setErrorMessage("Please enter a valid name.");
    } else {
      try {
        const response = await axios.post("/api/v1/contact", formData);
        setSuccessMessage(response.data.message);
      } catch (error) {
        const err = error as ApiError;
        setErrorMessage(err.message);
      }
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col flex-1 gap-y-4" noValidate>
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
      {errorMessage && (
        <p className="text-red-500 p-1 text-center">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="text-green-500 p-1 text-center">{successMessage}</p>
      )}
      <button
        type="submit"
        className="w-fit ml-auto relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-transparent  group py-1.5 px-2.5 border-2 border-white text-xl lg:text-2xl"
      >
        <span className="w-10 h-48 rotate-45 rounded bg-white absolute bottom-0 left-0 translate-x-[300%] ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-[-100%]"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out flex items-center gap-x-2">
          Send
        </span>
      </button>
    </form>
  );
}

export default ContactForm;
