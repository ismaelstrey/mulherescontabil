"use client";
import { delay, motion } from "framer-motion";
import React from "react";
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Card() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
    >
      Strey
    </motion.div>
  );
}
