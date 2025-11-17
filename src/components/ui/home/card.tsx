"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Card = () => {
  const cards = [
    { title: "Reducer & Context", link: "/reducercontext" },
    { title: "Todo App", link: "/reducercontext" },
    { title: "User Dashboard", link: "/reducercontext" },
    { title: "API Example", link: "/reducercontext" },
    { title: "UI Components", link: "/reducercontext" },
    { title: "Next.js Features", link: "/reducercontext" }
  ];

  return (
    <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
          className="bg-white/40 backdrop-blur-xl border border-white/20 
                     p-5 rounded-xl shadow-md cursor-pointer 
                     hover:bg-white/60 transition"
        >
          <Link href={item.link}>
            <h2 className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition">
              {item.title}
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Explore {item.title} →
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
