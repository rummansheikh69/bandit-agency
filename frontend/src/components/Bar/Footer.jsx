import React from "react";

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
      <footer className="bg-white text-primary-foreground xl:px-10 md:px-12 lg:px-28 mt-12 pb-6">
        <div className=" flex flex-col p-6 lg:flex-row  lg:justify-between  lg:items-end pb-6 bg-gradient-to-tl from-primary via-primary/85 to-primary/70 h-40 rounded-lg">
          <div className="text-sm mb-4 font-medium tracking-wide md:mt-14 lg:mt-0 md:mb-2 lg:mb-0">
            &copy; 2024 Bandit. All rights reserved.
          </div>
          <nav className="flex space-x-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="hover:text-secondary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
