import * as React from "react";

const Footers: React.FC = () => {
  const linksData = {
    title: "Links",
    links: ["Home", "Shop", "About", "Contact"],
  };

  const helpData = {
    title: "Help",
    links: ["Payment","Options", "Returns", "Privacy Policies"],
  };

  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer
      className="px-24 py-12 w-full bg-white border-t border-solid border-black border-opacity-20 
                 max-md:px-10 max-md:py-12 max-sm:px-5 max-sm:py-8"
      aria-label="Website Footer"
    >
      <div className="flex mx-auto max-w-[1240px] max-md:flex-col max-md:gap-10">
        <div className="mr-36 w-[285px] max-md:w-full">
          <h2 className="mb-12 text-2xl font-bold text-black">Funiro.</h2>
          <address className="text-base leading-normal text-neutral-400 not-italic">
            400 University Drive Suite 200 Coral Gables,
            <br />
             FL 33134 USA
          </address>
        </div>

        <div className="flex gap-36 max-md:flex-wrap max-md:gap-10 max-sm:flex-col max-sm:gap-8">
          <nav className="flex flex-col">
            <h3 className="mb-14 text-base text-neutral-400">{linksData.title}</h3>
            <ul className="flex flex-col gap-12">
              {linksData.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base text-black hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col ">
            <h3 className="mb-14 text-base text-neutral-400">{helpData.title}</h3>
            <ul className="flex flex-col gap-12">
              {helpData.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-base text-black hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="flex flex-col ml-20">
            <h3 className="mb-14 text-base text-neutral-400">Newsletter</h3>
            <form
              onSubmit={handleSubscribe}
              className="flex gap-4 items-center mt-[-14px] max-sm:flex-col max-sm:gap-5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="pb-1 text-sm border-b border-solid border-b-black text-neutral-400 w-[170px] max-sm:w-full bg-transparent outline-none mt-1"
                required
              />
              <button
                type="submit"
                className="pb-1 text-sm text-black border-b border-solid cursor-pointer border-b-black max-sm:w-full hover:opacity-80 ml-4"
              >
                SUBSCRIBE
              </button>
            </form>
          </section>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1240px]">
        <hr className="mb-9 h-px bg-zinc-300" />
        <p className="text-base text-black">
          &copy; {new Date().getFullYear()} Furino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footers;