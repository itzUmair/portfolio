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
        className="border-2 border-white w-fit ml-auto px-4 py-2 flex items-center gap-x-2 text-xl lg:text-2xl"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
