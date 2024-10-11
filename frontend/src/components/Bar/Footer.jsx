import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const menuItems = [
    { name: "Home" },
    { name: "About" },
    { name: "KRVC" },
    { name: "4Bronx" },
    { name: "505 Gallery" },
    { name: "Small Business" },
    { name: "Contact" },
    { name: "Donate" },
    { name: "Calendar" },
  ];

  return (
    <div>
      <footer className="text-primary-foreground xl:px-10 md:px-12 lg:px-28 mt-32 pb-6">
        <div className=" flex flex-col p-6 lg:flex-row  lg:justify-between  lg:items-end pb-6 bg-gradient-to-tl from-primary via-primary/85 to-primary/70 lg:h-40 h-96 rounded-lg">
          <div className=" text-sm mb-0 font-medium tracking-wide md:mt-14 lg:mt-0 md:mb-2 lg:mb-0 w-full flex md:block flex-col h-full md:h-max items-center justify-center">
            {/* donate  */}
            <div className=" flex flex-col mb-10">
              <div className=" mb-10 md:mb-2 p-2 rounded-md border border-zinc-300 bg-zinc-200 bg-opacity-30 backdrop-blur-lg shadow-xl h-40 w-40">
                <img
                  src="/donate.png"
                  alt="donations"
                  title="Donations"
                  className=" w-full h-full object-cover mb-2"
                />
                <h1 className=" font-semibold text-3xl">Donations</h1>
              </div>
            </div>
            <p>&copy; 2024 Bandit. All rights reserved.</p>
          </div>
          <nav className=" hidden md:flex md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="hover:text-secondary transition-colors"
              >
                <p className=" whitespace-nowrap">{item.name}</p>
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
