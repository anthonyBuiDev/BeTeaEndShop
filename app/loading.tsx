"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <motion.span
        className="block h-12 w-12 rounded-[50%] border-8  border-t-black "
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </div>
  );
}
