"use client";
import { useState } from "react";
import InputField from "@/components/atoms/InputField";
import Modal from "@/components/atoms/Modal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });

    setShowModal(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white pb-8">
            Send me a message!
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>

        <form className="mt-8 grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <InputField
            id="name"
            type="input"
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            id="email"
            type="input"
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="message"
            type="textarea"
            label="Your Message"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="inline-flex items-center py-3 px-14 bg-purple-600 dark:bg-purple-700 text-white rounded-md hover:bg-purple-600 dark:hover:bg-purple-700 transition duration-300"
            >
              SHOOT →
            </button>
          </div>
        </form>

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Thank you! Your message has been sent.
          </h2>
        </Modal>
      </div>
    </div>
  );
}
