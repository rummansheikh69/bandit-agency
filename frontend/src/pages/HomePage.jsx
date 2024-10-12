import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Info,
  Image as ImageIcon,
  Users,
  Palette,
  Music,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  ChevronDown,
  MapPin,
  Clock,
  Phone,
  Laptop,
  Droplet,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Link } from "react-router-dom";
import Layout from "./Layout";
import Slider from "@/components/home/Slider";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const carouselImages = [
    "https://academy-cdn.wedio.com/2022/05/art-department-in-film-production-wedio.jpg",
    "https://img.freepik.com/premium-photo/film-directors-office-with-awards-business-office-hospital-background_1020697-459085.jpg",
    "https://macksennettstudios.net/wp-content/uploads/2021/07/What-does-an-art-director-do-in-film.jpg",
    "https://officesnapshots.com/wp-content/uploads/2020/07/mill-film-studio-offices-adelaide-3.jpg",
  ];

  const workshops = [
    {
      title: "Introduction to Pottery",
      date: "Monday, 6:00 PM",
      instructor: "John Smith",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "Digital Art Basics",
      date: "Wednesday, 7:00 PM",
      instructor: "Emily Brown",
      icon: <Laptop className="w-6 h-6" />,
    },
    {
      title: "Watercolor Techniques",
      date: "Saturday, 10:00 AM",
      instructor: "Michael Johnson",
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      title: "Photography for Beginners",
      date: "Sunday, 2:00 PM",
      instructor: "Sarah Lee",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: "Photography for Expert",
      date: "Sunday, 5:00 PM",
      instructor: "Sarah Ali",
      icon: <Camera className="w-6 h-6" />,
    },
  ];

  const maxPage = 4;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };
  const [showButton, setShowButton] = useState(true);

  return (
    <div className="bg-transparent min-h-screen ">
      <Layout>
        {/* Hero section  */}
        <main className="px-0">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="   mb-20 h-max"
          >
            <div className="md:flex items-center gap-10">
              <div className="md:w-full h-[70vh] md:h-screen ">
                <div className="  mb-4 w-full h-full md:px-14 px-5 bg-zinc-900 flex flex-col gap-2 justify-between">
                  <div>s</div>
                  <div className=" md:mt-0 mt-20 mb-20">
                    <h2 className=" text-3xl text-zinc-200 font-bold mb-4">
                      505BX
                    </h2>
                    <p className="text-zinc-200 mb-4">
                      A community space for work and play located in the heart
                      of the Riverdale/Kingsbridge community
                    </p>
                    <div className=" flex items-center gap-3">
                      <Button
                        onClick={open}
                        className="bg-zinc-200 w-max text-zinc-900 hover:bg-zinc-100 font-medium"
                      >
                        Contact
                      </Button>
                      <Button className="bg-zinc-200 w-max text-zinc-900 hover:bg-zinc-100 font-medium">
                        Donate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                centered
                opened={opened}
                onClose={close}
                size={"xl"}
                title="Contact Us"
              >
                <section className="bg-card p-6 rounded-lg shadow-lg">
                  <div className="md:flex md:space-x-8">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <form className="space-y-4">
                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <Textarea placeholder="Your Message" className="h-32" />
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Send Message
                        </Button>
                      </form>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="text-xl font-semibold mb-4">Visit Us</h4>
                      <div className="space-y-2">
                        <p className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2" /> 123 Community Ave,
                          Artsville, AC 12345
                        </p>
                        <p className="flex items-center">
                          <Phone className="w-5 h-5 mr-2" /> (123) 456-7890
                        </p>
                        <p className="flex items-center">
                          <Mail className="w-5 h-5 mr-2" /> info@bandit.com
                        </p>
                        <p className="flex items-center">
                          <Clock className="w-5 h-5 mr-2" /> Mon-Fri: 9AM-7PM,
                          Sat-Sun: 10AM-5PM
                        </p>
                      </div>
                      <div className="flex space-x-4 mt-6">
                        <a
                          href="#"
                          className="text-primary hover:text-primary/80"
                        >
                          <Facebook className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="text-primary hover:text-primary/80"
                        >
                          <Twitter className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="text-primary hover:text-primary/80"
                        >
                          <Instagram className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </Modal>
              {/* <div className="md:w-1/2 mt-4 md:mt-0 h-[400px] overflow-hidden rounded-lg">
                <motion.div
                  animate={{ y: `-${currentImageIndex * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  {carouselImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Community Event ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </motion.div>
              </div> */}
            </div>
          </motion.section>

          {/* about us */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 md:px-10 px-2"
          >
            <div className=" md:grid grid-cols-2 gap-20">
              <div className=" w-full ">
                <h1 className=" font-semibold text-3xl">About 505 BX</h1>
                <div className=" mt-5">
                  <p className=" text-[17px] font-medium text-zinc-700">
                    505BX is a community space for work and play located in the
                    heart of the Riverdale/Kingsbridge community at 505 West
                    236th Street. It is the work and event space for KRVC,
                    Gallery 505, KRVC Productions and The 4Bronx Project. Other
                    groups use the space for small events and meetings. In
                    addition to the small events KRVC and 4Bronx produce at
                    505BX, they produce larger events throughout our community.{" "}
                    <br /> <br />
                    <b>Our large funders include:</b> Empire State Development,
                    NYC Department of Youth & Community Development, NYC
                    Department of Cultural Affairs, NYS Department of Family and
                    Children’s Services, State Senator Alessandra Biaggi, State
                    Senator Gustavo Rivera, Assemblyman Jeff Dinowitz, Council
                    Member Eric Dinowitz, NewYork-Presbyterian Hospital, River
                    Spring Living/Hebrew Home at Riverdale, TD Bank, Douglas
                    Elliman Real Estate and Ridgewood Savings Bank.
                  </p>
                </div>
              </div>
              <div className=" w-full">
                <Slider />
              </div>
            </div>
          </motion.section>

          {/* <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-12 bg-card p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Artist Spotlight</h3>
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Featured+Artist"
                  alt="Featured Artist"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="md:w-2/3 md: pl-8">
                <h4 className="text-xl font-semibold mb-2">Jane Doe</h4>
                <p className="text-muted-foreground mb-4">
                  Jane Doe is a local painter known for her vibrant landscapes
                  and abstract compositions. Her work has been featured in
                  numerous galleries across the city and has inspired many
                  budding artists in our community.
                </p>
                <Button variant="outline">View Artist Profile</Button>
              </div>
            </div>
          </motion.section> */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-12 bg-card p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Upcoming Workshops</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {workshops.slice(0, page).map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    {workshop.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{workshop.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {workshop.date}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Instructor: {workshop.instructor}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div
              onClick={() => {
                HandleLoadingMore();
                setShowButton(false);
              }}
              className="text-center mt-6"
            >
              {showButton && <Button>View All Workshops</Button>}
            </div>
          </motion.section>

          <div className=" px-2 md:px-10">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-12 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg"
            >
              <div className="md:flex md:space-x-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h4 className="text-xl font-semibold mb-4">
                    Volunteer Opportunities
                  </h4>
                  <p className="mb-4">
                    Join our community of volunteers and help make a difference
                    in the arts scene. We have various roles available, from
                    event coordination to workshop assistance.
                  </p>
                  <Button variant="secondary">Learn More</Button>
                </div>
                <div className="md:w-1/2">
                  <h4 className="text-xl font-semibold mb-4">
                    Newsletter Signup
                  </h4>
                  <p className="mb-4">
                    Stay updated with our latest events, workshops, and
                    community news. Subscribe to our newsletter for weekly
                    updates.
                  </p>
                  <form className="flex space-x-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-primary-foreground text-primary"
                    />
                    <Button variant="secondary">Subscribe</Button>
                  </form>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </Layout>
    </div>
  );
}
