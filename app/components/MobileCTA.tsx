"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AtomIcon, type AtomIconHandle } from "@/components/ui/atom-icon";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const atomRef = useRef<AtomIconHandle>(null);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Auto-animate atom icon
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      atomRef.current?.startAnimation();
    }, 2500);
    atomRef.current?.startAnimation();
    return () => clearInterval(interval);
  }, [visible]);

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
          <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-100 dark:border-white/10 px-4 py-3 safe-area-pb">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="rotating-border-btn rotating-border-btn-thin w-full py-4 text-white font-semibold text-base flex items-center justify-center gap-2.5"
            >
              <span className="btn-shimmer-ray" />
              <AtomIcon ref={atomRef} size={20} className="text-violet-400" />
              Start Automating
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
