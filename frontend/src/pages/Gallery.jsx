import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "./Layout";

function Gallery() {
  const maxPage = 8;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };

  const [showButton, setShowButton] = useState(true);

  const photos = [
    {
      id: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      image: "/placeholder.svg",
    },
    {
      id: 5,
      image: "/placeholder.svg",
    },
    {
      id: 6,
      image: "/placeholder.svg",
    },
    {
      id: 7,
      image: "/placeholder.svg",
    },
    {
      id: 8,
      image: "/placeholder.svg",
    },
    {
      id: 9,
      image: "/placeholder.svg",
    },
    {
      id: 10,
      image: "/placeholder.svg",
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
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={photo?.image}
                  alt={`Community Artwork ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-300"
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
