"use client";

import { Button } from ".";

export default function Form() {
  return (
    <form className="flex flex-col gap-4 mt-4 px-4">
      <input type="text" placeholder="Name" className="input h-12" />
      <input type="text" placeholder="Email" className="input h-12" />
      <textarea placeholder="Message" className="input h-80" />

      <Button />
    </form>
  );
}
