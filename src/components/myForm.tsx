import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "@/components/main/button";

export const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formId = "xzbqllbw";

    try {
      const response = await axios.post(`https://formspree.io/f/${formId}`, {
        name: name,
        email: email,
        message: message,
      });

      if (response.data.ok) {
        // The form submission was successful
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col justify-center items-center">
          <i className="fas fa-check-double fa-4x" />
          <p>Повідомлення відправлене</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start space-y-10 text-vip-blue font-semibold max-w-[450px]"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше ім’я*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-vip-input p-2 rounded placeholder:text-vip-input focus:outline-none focus:border-b-vip-blue"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Поштова скринька*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-vip-input p-2 rounded placeholder:text-vip-input focus:outline-none focus:border-b-vip-blue"
            required
          />

          <textarea
            name="message"
            placeholder="Повідомлення*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-b border-vip-input p-2 rounded placeholder:text-vip-input focus:outline-none focus:border-b-vip-blue !h-40 resize-none"
            required
          />

          <Button btnType="btn">Надіслати</Button>
        </form>
      )}
    </>
  );
};
