"use client";
import * as React from "react";

export const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="flex flex-col ml-20">
      <h3 className="mb-14 text-base text-neutral-400">Newsletter</h3>
      <form
        onSubmit={handleSubscribe}
        className="flex relative justify-between mt-14 max-sm:flex-col max-sm:gap-5"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Address"
          className="pb-1 text-sm border-b border-solid border-b-black text-neutral-400 w-[200px] max-sm:w-full bg-transparent outline-none"
          required
        />
        <button
          type="submit"
          className="pb-1 text-sm text-black border-b border-solid cursor-pointer border-b-black max-sm:w-full hover:opacity-80"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};
