import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import MenuLogo from "@/components/utility/menu-button";
import ThemeSwitch from "@/components/utility/theme-switch";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        {/* LOGO */}
        <Link href="/" aria-label="Return to home page">
          <motion.img
            src="/logo.png"
            alt="Logo"
            animate={{
              scale: scrolled ? 0.7 : 1,
              x: scrolled ? -65 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => (
              <li
                key={index}
                className="my-3 transition-transform duration-100 hover:scale-[1.1]"
              >
                <Link
                  href={_link.href}
                  className={classNames(
                    pathName === _link.href
                      ? "font-semibold text-background dark:hover:text-foreground"
                      : "text-foreground",
                    "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                  )}
                >
                  {_link.href === pathName && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                    />
                  )}
                  {_link.title}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeSwitch />
        </nav>

        {/* MOBILE MENU BUTTON */}
        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </AnimatePresence>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
    </header>
  );
}
