"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, Search, User, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Navbar Variant 1: Minimal Fade
export function NavbarMinimalFade() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"],
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="border-border/50 fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            Brand
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {["Product", "Features", "Pricing", "About"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background md:block"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 py-4 md:hidden"
          >
            {["Product", "Features", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Navbar Variant 2: Centered Logo
export function NavbarCenteredLogo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/80 fixed left-0 right-0 top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {["Product", "Features"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Centered Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold"
          >
            LOGO
          </motion.div>

          {/* Right Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {["Pricing", "About"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (i + 2) * 0.1 }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              Sign In
            </motion.button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// Navbar Variant 3: Slide Down
export function NavbarSlideDown() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background py-2 shadow-lg" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            Brand
          </motion.div>

          <div className="hidden items-center gap-6 md:flex">
            {["Home", "Services", "Work", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="group relative text-sm font-medium"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background"
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

// Navbar Variant 4: Mega Menu
export function NavbarMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Brand</div>

          <div className="hidden items-center gap-8 md:flex">
            {["Products", "Solutions", "Resources"].map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item}
                  <motion.div
                    animate={{ rotate: activeMenu === item ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                {activeMenu === item && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-border bg-background p-2 shadow-lg"
                  >
                    {["Option 1", "Option 2", "Option 3"].map((option) => (
                      <a
                        key={option}
                        href="#"
                        className="block rounded-md px-4 py-2 text-sm transition-colors hover:bg-muted"
                      >
                        {option}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground" />
            <User className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-foreground" />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar Variant 5: Glassmorphism
export function NavbarGlassmorphism() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-4 right-4 top-4 z-50 rounded-2xl border !border-white/50 bg-black/60 shadow-xl backdrop-blur-xl"
    >
      <div className="px-6">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-[140px] text-xl font-bold"
          >
            <img
              alt="logo"
              src={"/PureDesign-w.png"}
              className="h-[50px] w-auto"
            />
          </motion.div>

          <div className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Services", "Portfolio"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-sm font-bold !text-white"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-foreground px-6 py-2 text-sm font-medium !text-white"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

// Navbar Variant 6: Split Navigation
export function NavbarSplitNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold"
            >
              BRAND
            </motion.div>

            <div className="hidden items-center gap-8 lg:flex">
              {["Products", "Solutions", "Developers"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 text-sm font-medium"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg bg-foreground px-6 py-2 text-sm font-medium text-background"
            >
              Start Free Trial
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar Variant 7: Sidebar Toggle
export function NavbarSidebarToggle() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="rounded-lg p-2 transition-colors hover:bg-muted"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="text-xl font-bold">Brand</div>

            <div className="flex items-center gap-4">
              <Search className="h-5 w-5 cursor-pointer" />
              <ShoppingCart className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed bottom-0 left-0 top-0 z-50 w-80 border-r border-border bg-background p-6"
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {["Home", "Products", "About", "Services", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="block text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </motion.a>
            ),
          )}
        </div>
      </motion.div>

      {/* Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}
    </>
  );
}

export { NavbarMinimalFade as Navbar1 };
export { NavbarCenteredLogo as Navbar2 };
export { NavbarSlideDown as Navbar3 };
export { NavbarMegaMenu as Navbar4 };
export { NavbarGlassmorphism as Navbar5 };
export { NavbarSplitNav as Navbar6 };
export { NavbarSidebarToggle as Navbar7 };
