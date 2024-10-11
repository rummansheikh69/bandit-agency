import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCalendar from "../ui/calendar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    { name: "4Bronx", route: "/4bronx" },
    { name: "505 Gallery", route: "/gallery" },
    { name: "Small Business" },
  ];

  return (
    <div className=" flex items-center justify-center">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed  md:mt-5 xl:container mx-auto w-96 md:w-full px-5 rounded-lg p-5 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-200 bg-opacity-30 border border-zinc-300 text-black backdrop-blur-lg shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between ">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold ${
              isScrolled ? "text-black" : "text-white"
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
                  className={`flex items-center space-x-1 font-[400] ${
                    isScrolled
                      ? "text-black hover:text-zinc-700"
                      : "text-white hover:text-zinc-300"
                  }   transition-colors group `}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                  {item.name === "About" && (
                    <ChevronDown className="w-4 h-4  transition-opacity" />
                  )}
                  {item.name === "KRVC" && (
                    <ChevronDown className="w-4 h-4  transition-opacity" />
                  )}
                </Link>

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
          {/* calendar button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative"
            onMouseEnter={() => setShowCalendar(true)}
            onMouseLeave={() => setShowCalendar(false)}
          >
            <button
              className={`flex items-center space-x-1 font-[400] ${
                isScrolled
                  ? "text-black hover:text-zinc-700"
                  : "text-white hover:text-zinc-300"
              }   transition-colors group `}
            >
              <span>
                <CalendarIcon className="w-4 h-4" />
              </span>
              <span>Calendar</span>
            </button>
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
          </motion.div>
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
              <nav className="flex flex-col gap-3 mt-8">
                <Link to="/" className=" tracking-wide text-[16px]">
                  Home
                </Link>
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>About</AccordionTrigger>
                      <AccordionContent>
                        <Link to="/news">News</Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-2">
                      <AccordionTrigger>KRVC</AccordionTrigger>
                      <AccordionContent>
                        <div className=" flex flex-col gap-2">
                          <Link to="/news">Whats new at KRVC</Link>
                          <Link to="/news">KRVC x SBS</Link>
                          <Link to="/news">KRVC Productions</Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <Link to="/" className=" tracking-wide">
                  4Bronx
                </Link>
                <Link to="/gallery" className=" tracking-wide">
                  505 Gallery
                </Link>
                <Link to="/" className=" tracking-wide">
                  Small Business
                </Link>

                <div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Calendar</AccordionTrigger>
                      <AccordionContent>
                        <CustomCalendar />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </div>
  );
}

export default Navbar;
