import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCalendar from "../ui/calendar";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showKrvc, setShowKrvc] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About" },
    { name: "KRVC" },
    { name: "4Bronx" },
    { name: "505 Gallery", route: "/gallery" },
    { name: "Small Business" },
    { name: "Contact" },
    { name: "Donate" },
    { name: "Calendar", icon: <CalendarIcon className="w-4 h-4" /> },
  ];

  return (
    <div className=" flex items-center justify-center">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed  md:mt-5 xl:container mx-auto w-96 md:w-full px-5 rounded-lg p-5 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/70 backdrop-blur-lg shadow-lg"
            : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between ">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold ${
              isScrolled ? "text-white" : "text-black"
            } `}
          >
            505BX
          </motion.h1>

          <nav className="hidden lg:flex items-center w-full justify-between  md:justify-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => {
                  item.name === "Calendar" && setShowCalendar(true);
                  item.name === "About" && setShowAbout(true);
                  item.name === "KRVC" && setShowKrvc(true);
                  item.name === "Projects" && setShowProjects(true);
                }}
                onMouseLeave={() => {
                  item.name === "Calendar" && setShowCalendar(false);
                  item.name === "About" && setShowAbout(false);
                  item.name === "KRVC" && setShowKrvc(false);
                  item.name === "Projects" && setShowProjects(false);
                }}
              >
                <Link
                  to={item.route}
                  className={`flex items-center space-x-1 ${
                    isScrolled
                      ? "text-white hover:text-secondary"
                      : "text-black hover:text-zinc-800"
                  }   transition-colors group `}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                  {item.name === "Calendar" && (
                    <ChevronDown className="w-4 h-4  transition-opacity" />
                  )}
                  {item.name === "About" && (
                    <ChevronDown className="w-4 h-4  transition-opacity" />
                  )}
                  {item.name === "KRVC" && (
                    <ChevronDown className="w-4 h-4  transition-opacity" />
                  )}
                </Link>
                {item.name === "Calendar" && (
                  <AnimatePresence>
                    {showCalendar && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg p-4"
                      >
                        <CustomCalendar />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {item.name === "About" && (
                  <AnimatePresence>
                    {showAbout && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg p-2 border border-zinc-200 w-40"
                      >
                        <div className=" flex flex-col gap-2">
                          <Link to="/" className="">
                            <div className=" w-full  px-2 cursor-pointer py-1 hover:bg-zinc-100">
                              News
                            </div>
                          </Link>
                          {/* <Link to="/" className="">
                              <div className=" w-full  px-2 py-1 cursor-pointer hover:bg-zinc-100">
                                News
                              </div>
                            </Link> */}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
                {item.name === "KRVC" && (
                  <AnimatePresence>
                    {showKrvc && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg p-2 border border-zinc-200 w-52 py-4"
                      >
                        <div className=" flex flex-col gap-2">
                          <Link to="/" className="">
                            <div className=" w-full  px-2 cursor-pointer py-1 hover:bg-zinc-100">
                              What's New At KRVC
                            </div>
                          </Link>
                          <Link to="/" className="">
                            <div className=" w-full  px-2 py-1 cursor-pointer hover:bg-zinc-100">
                              KRVC x SBS
                            </div>
                          </Link>
                          <Link to="/" className="">
                            <div className=" w-full  px-2 py-1 cursor-pointer hover:bg-zinc-100">
                              KRVC Productions
                            </div>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={`lg:hidden ${
                  isScrolled
                    ? "text-black hover:text-secondary"
                    : "text-black hover:text-zinc-800"
                } border-primary-foreground `}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-primary text-primary-foreground"
            >
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className=" tracking-wide text-[16px]">
                  Home
                </Link>
                <div className="collapse rounded-[0px] p-0 m-0">
                  {/* Checkbox for toggle behavior */}
                  <input type="checkbox" className="peer p-0 m-0" />
                  <div className="collapse-title text-[16px] p-0 m-0 h-auto leading-none">
                    Click
                  </div>
                  <div className="collapse-content h-0 overflow-hidden peer-checked:h-auto peer-checked:ml-3 p-0 m-0 transition-all duration-300">
                    <Link className="p-0 m-0">News</Link>
                  </div>
                </div>

                <Link to="/" className=" tracking-wide">
                  Home
                </Link>
                <Link to="/" className=" tracking-wide">
                  Home
                </Link>
                <Link to="/" className=" tracking-wide">
                  Home
                </Link>
                <Link to="/" className=" tracking-wide">
                  Home
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </div>
  );
}

export default Navbar;
