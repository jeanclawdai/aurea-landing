"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { cn } from "@/lib/utils";

const navHrefs = [
  { key: "features" as const, href: "#features" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "pricing" as const, href: "#pricing" },
  { key: "contact" as const, href: "#contact" },
];

const langOptions = [
  { code: "en" as const, flag: "🇬🇧", label: "EN" },
  { code: "pt" as const, flag: "🇵🇹", label: "PT" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const lastScrollY = useRef(0);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang = langOptions.find((o) => o.code === lang)!;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300 px-6 py-3",
            isScrolled
              ? "bg-white/60 dark:bg-white/10 backdrop-blur-2xl border border-white/60 dark:border-white/20 shadow-lg shadow-black/5"
              : "bg-transparent border border-transparent",
            isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          style={{ borderRadius: 20 }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gray-950 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-gray-950 font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-950 dark:text-white">Aurea</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navHrefs.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {t.nav[link.key]}
              </motion.a>
            ))}
          </div>

          {/* Desktop: CTA + Theme Toggle + Language */}
          <div className="hidden md:flex items-center gap-2">
            {/* Login CTA */}
            <motion.button
              onClick={() => setIsLoginOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              {t.nav.cta}
            </motion.button>

            {/* Dark mode toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-black/5 transition-all"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-all"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <ChevronDown size={12} className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute right-0 top-full mt-1 liquid-glass dark:bg-gray-950/90 py-1 min-w-[90px]"
                  style={{ borderRadius: 12 }}
                >
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLang(opt.code); setIsLangOpen(false); }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${lang === opt.code ? "font-semibold text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 liquid-glass p-6"
          >
            <div className="flex flex-col gap-4">
              {navHrefs.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <button
                onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }}
                className="mt-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-950 rounded-xl font-medium"
              >
                {t.nav.cta}
              </button>

              {/* Mobile Language + Theme Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-2">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => setLang(opt.code)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${lang === opt.code ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-medium" : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"}`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile dark mode toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                  aria-label="Toggle dark mode"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.span
                        key="sun-m"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={18} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon-m"
                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setIsLoginOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white dark:bg-[#0f0f1a] rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full" style={{
                background: "linear-gradient(90deg, #E879F9, #A78BFA, #60A5FA, #E879F9)",
                backgroundSize: "200% 100%",
              }} />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center">
                    <span className="text-white dark:text-gray-950 font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-bold text-gray-950 dark:text-white">Aurea</span>
                </div>

                {/* Headline */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Welcome back</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Sign in to your dashboard</p>

                {/* Form */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="group relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-fuchsia-500 transition-colors">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all"
                    />
                  </div>

                  {/* Password */}
                  <div className="group relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-fuchsia-500 transition-colors">
                      <Lock size={16} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {/* Forgot */}
                  <div className="flex justify-end">
                    <button className="text-xs text-fuchsia-500 hover:text-fuchsia-600 transition-colors">
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = "/dashboard"}
                    className="relative w-full py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden group"
                  >
                    <motion.div
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 4, repeat: 9999, ease: "linear" }}
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(90deg, #1a1a2e, #E879F9, #A78BFA, #1a1a2e)",
                        backgroundSize: "300% 100%",
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Sign in
                      <ArrowRight size={15} />
                    </span>
                  </motion.button>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-gray-100 dark:bg-white/10" />
                  <span className="text-xs text-gray-400">or</span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-white/10" />
                </div>

                {/* Sign up */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Don&apos;t have an account?{" "}
                  <button className="text-fuchsia-500 hover:text-fuchsia-600 font-medium transition-colors">
                    Get started free
                  </button>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
