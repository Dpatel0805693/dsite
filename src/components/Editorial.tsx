"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Editorial() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex h-screen items-center justify-center bg-[#F8F6F2]"
    >
      <Image
        src="/images/comingsoon1.png"
        alt="Editorial Coming Soon"
        width={650}
        height={650}
        priority
        className="object-contain"
      />
    </motion.section>
  );
}