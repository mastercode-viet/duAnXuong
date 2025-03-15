import * as React from "react";
import { SocialIcons } from "./Sociallcon";


export const Navigation: React.FC = () => {
  const menuItems = ["Home", "Shop", "About", "Contact"];

  return (
    <nav className="px-16 py-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-1.5 justify-center items-center text-4xl font-bold text-black whitespace-nowrap max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6275455e40592e039274bc71d755698d72e742a01e963609280cc5c491d601f3?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
              alt="Furniro Logo"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.56] w-[50px]"
            />
            <h1 className="self-stretch my-auto">Furniro</h1>
          </div>
        </div>

        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <ul className="flex gap-10 self-stretch my-auto text-base font-medium text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
};
