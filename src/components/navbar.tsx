'use client'

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { fadeUp, staggerContainer, tapScale } from "../lib/motion";

const sections = ["home", "projetos", "sobre", "contato"] as const;

export default function Navbar() {
  const [active, setActive] = useState<(typeof sections)[number]>("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) {
          continue;
        }

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive((current) => (current === section ? current : section));
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);

    window.addEventListener("resize", closeMenu, { passive: true });

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const navClassName = `w-full ${
    isOpen ? "bg-zinc-900" : "bg-transparent"
  } transition-all duration-300 md:bg-zinc-900 fixed py-4 md:px-8 top-0 left-0 z-50 md:border-b border-zinc-700`;

  return (
    <nav className={navClassName}>
      <div className="container flex items-center justify-end">
        <div className="hidden md:flex gap-8">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`navhover ${active === item ? "active" : ""}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        <motion.button
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden flex flex-col gap-1"
          aria-expanded={isOpen}
          aria-label="Abrir menu"
          whileTap={tapScale}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </motion.button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex flex-col gap-4 bg-zinc-900 px-4 pb-4 mt-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {sections.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`navhover ${active === item ? "active" : ""}`}
                  variants={fadeUp}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
