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

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="bg-white min-h-screen ">
      <Layout>
        {/* Hero section  */}
        <main className=" p-4 md:px-12 lg:px-28 xl:px-10 pt-24">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 rounded-lg shadow-lg mb-8 overflow-hidden"
          >
            <div className="md:flex items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">
                  Welcome to ArtsCommunityHub
                </h2>
                <marquee className="text-muted-foreground font-medium mb-4">
                  Your vibrant community space for arts, events, and family
                  activities. Join us for exciting workshops, performances, and
                  creative experiences!
                </marquee>
                <div className="  mb-4 rounded-lg w-full border border-zinc-200 bg-gradient-to-tl to-primary/60 via-primary/80 from-primary shadow-2xl p-4 flex flex-col gap-2">
                  <h2 className=" text-3xl text-white font-bold mb-4">505BX</h2>
                  <p className="text-white mb-4">
                    A community space for work and play located in the heart of
                    the Riverdale/Kingsbridge community
                  </p>
                </div>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Explore Events
                </Button>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 h-[400px] overflow-hidden rounded-lg">
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
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                title: "Art Workshops",
                icon: <Palette className="w-12 h-12 mb-4 text-primary" />,
                description:
                  "Unleash your creativity with our diverse range of art workshops for all ages and skill levels.",
              },
              {
                title: "Live Performances",
                icon: <Music className="w-12 h-12 mb-4 text-primary" />,
                description:
                  "Experience the magic of live music, theater, and dance performances from local and visiting artists.",
              },
              {
                title: "Family Fun",
                icon: <Users className="w-12 h-12 mb-4 text-primary" />,
                description:
                  "Engage in exciting family-friendly activities, from interactive storytelling to hands-on craft sessions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 flex flex-col items-center rounded-lg shadow-md text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Upcoming Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Watercolor Masterclass",
                  date: "Saturday, 10:00 AM",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Family Movie Night",
                  date: "Friday, 7:00 PM",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Local Band Showcase",
                  date: "Saturday, 8:00 PM",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-12 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Get Involved</h3>
            <div className="md:flex md:space-x-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h4 className="text-xl font-semibold mb-4">
                  Volunteer Opportunities
                </h4>
                <p className="mb-4">
                  Join our community of volunteers and help make a difference in
                  the arts scene. We have various roles available, from event
                  coordination to workshop assistance.
                </p>
                <Button variant="secondary">Learn More</Button>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-xl font-semibold mb-4">
                  Newsletter Signup
                </h4>
                <p className="mb-4">
                  Stay updated with our latest events, workshops, and community
                  news. Subscribe to our newsletter for weekly updates.
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

          <motion.section
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
          </motion.section>

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

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
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
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-primary hover:text-primary/80">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </Layout>
    </div>
  );
}
