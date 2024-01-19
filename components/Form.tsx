"use client";

import { useState, useTransition } from "react";

import { Button } from ".";
import { sendEmail } from "@/lib/nodemailer";
import { Contact } from "@/types";

export default function Form() {
  const [isPending, startTransition] = useTransition();
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      await sendEmail(contact);

      setContact({ name: "", email: "", message: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <input
        type="text"
        placeholder="Full name"
        required
        className="input h-12"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="input h-12"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        required
        className="input h-80 resize-none"
        value={contact.message}
        onChange={(e) => setContact({ ...contact, message: e.target.value })}
      />

      <Button cta="Send message" isPending={isPending} />
    </form>
  );
}
