"use client";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="py-12 px-6 bg-white dark:bg-[#0a0a0f] border-t border-gray-100 dark:border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gray-950 dark:bg-white/10 flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <span className="font-bold text-gray-950 dark:text-white text-lg">Aurea</span>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500 text-center">
          {lang === "pt" ? "© 2026 Aurea. Todos os direitos reservados." : "© 2026 Aurea. All rights reserved."}
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-400 dark:text-gray-500">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
          <a href="mailto:hello@aureaai.studio" className="hover:text-gray-900 dark:hover:text-white transition-colors">hello@aureaai.studio</a>
        </div>
      </div>
    </footer>
  );
}
