"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-3 safe-area-pb">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-shimmer w-full py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-base shadow-lg"
            >
              Começar Gratuitamente →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
