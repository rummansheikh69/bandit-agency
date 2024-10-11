import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "./Layout";

function Gallery() {
  const maxPage = 12;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };

  const [showButton, setShowButton] = useState(true);

  const photos = [
    {
      id: 1,
      image: "/dominican-republic.jpg",
    },
    {
      id: 2,
      image: "/hester.jpg",
    },
    {
      id: 3,
      image: "/fade-2.jpg",
    },
    {
      id: 4,
      image: "/kiss-me.jpg",
    },
    {
      id: 5,
      image: "/celtic-cross-1.jpg",
    },
    {
      id: 6,
      image: "/the-grande.jpg",
    },
    {
      id: 7,
      image: "/magenta.jpeg",
    },
    {
      id: 8,
      image: "/jwf.png",
    },
    {
      id: 9,
      image: "/horses.jpeg",
    },
    {
      id: 10,
      image: "/tree.png",
    },
    {
      id: 11,
      image: "/taino.jpg",
    },
    {
      id: 12,
      image: "/elegance.jpg",
    },
    {
      id: 13,
      image: "/img-2815.jpg",
    },
    {
      id: 14,
      image: "/despair.jpg",
    },
    {
      id: 15,
      image: "/ginkgo.jpg",
    },
    {
      id: 16,
      image: "/image7.png",
    },
    {
      id: 17,
      image: "/wild.jpg",
    },
    {
      id: 18,
      image: "/mjoyce.jpg",
    },
    {
      id: 19,
      image: "/seige.jpg",
    },
    {
      id: 20,
      image: "/sandra.jpg",
    },
    {
      id: 21,
      image: "/jordan.jpeg",
    },
  ];

  return (
    <Layout>
      <div className=" mt-32 md:px-12 lg:px-28 xl:px-10">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12 bg-card p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">505BX Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(0, page)?.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative h-64 w-72 rounded-lg overflow-hidden"
              >
                <img
                  src={photo?.image}
                  alt={`Community Artwork ${index + 1}`}
                  layout="fill"
                  className="hover:scale-110 w-full h-full object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            {showButton && (
              <button
                onClick={() => {
                  HandleLoadingMore();
                  setShowButton(false);
                }}
                className=" px-4 bg-zinc-800 text-white py-1.5 hover:bg-zinc-700 transition outline-none rounded-md tracking-wide"
              >
                View Full Gallery
              </button>
            )}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}

export default Gallery;
