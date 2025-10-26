"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";

// Footer Variant 1: Minimal Centered
export function FooterMinimalCentered() {
  return (
    <footer className="border-t !border-white/60 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold"
          >
            Pure design
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-6"
          >
            {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/60 transition-colors hover:text-white/50"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 text-sm"
          >
            {["About", "Services", "Contact", "Privacy", "Terms"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/60 transition-colors hover:text-white/50"
                >
                  {link}
                </a>
              ),
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white/60"
          >
            © 2025 Pure design. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

// Footer Variant 2: Multi-Column
export function FooterMultiColumn() {
  const columns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Press", "Partners"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact", "Status"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Settings"],
    },
  ];

  return (
    <footer className="bg-muted px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="mb-4 text-2xl font-bold">Pure design</div>
            <p className="mb-4 text-sm text-white/60">
              Building the future of web development, one project at a time.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-background transition-colors hover:bg-foreground hover:text-background"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {columns.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="mb-4 font-semibold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors/60 text-sm text-white hover:text-white/50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:flex-row/60 flex flex-col items-center justify-between gap-4 border-t !border-white/60 pt-8 text-sm text-white"
        >
          <div>© 2025 Pure design. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/50">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white/50">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Footer Variant 3: Newsletter Focus
export function FooterNewsletterFocus() {
  return (
    <footer className="bg-foreground px-4 py-16 text-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-3xl font-bold">Stay in the loop</div>
            <p className="mb-6 text-background/70">
              Subscribe to our newsletter for the latest updates, tips, and
              exclusive content.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg bg-background px-6 py-3 font-medium text-white/50"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {["About", "Services", "Portfolio", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Connect</h3>
              <ul className="space-y-3">
                {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 transition-colors hover:text-background"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-background/20 pt-8 text-center text-background/70"
        >
          © 2025 Pure design. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}

// Footer Variant 4: Contact Info
export function FooterContactInfo() {
  return (
    <footer className="border-t !border-white/60 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-[140px] text-xl font-bold"
            >
              <img
                alt="logo"
                src={"/pd-square.webp"}
                className="mb-4 h-[80px] w-auto"
              />
            </motion.div>

            <p className="mb-6 !text-white/80">
              We're here to help you build amazing digital experiences. Get in
              touch with us today.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:dev@puredesign.ng"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5 !text-white/80" />
                <span className="text-white/80">dev@puredesign.ng</span>
              </a>

              <a
                href="tel:+23491342448820"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 !text-white/80" />
                <span className="text-white/80">+234 91342448820</span>
              </a>
            </div>
          </motion.div>

          {[
            { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
            {
              title: "Support",
              links: ["Help Center", "Contact", "Status", "FAQ"],
            },
          ].map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="mb-4 font-semibold !text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors/60 text-sm text-white hover:text-white/50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 border-t !border-white/60 pt-8 md:flex-row"
        >
          <div className="text-sm text-white/60">
            © 2025 Pure design. All rights reserved.
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/60 transition-colors hover:text-white/50"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Footer Variant 5: CTA Banner
export function FooterCTABanner() {
  return (
    <footer className="px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-3xl bg-foreground p-12 text-center text-background"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-balance text-xl text-background/70">
            Join thousands of teams already building with our platform
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-background px-8 py-3 font-medium text-white/50"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full border-2 border-background/20 px-8 py-3 font-medium"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>

        <div className="border-t !border-white/60 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-white/60">
              © 2025 Pure design. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/60 transition-colors hover:text-white/50"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Footer Variant 6: App Download
export function FooterAppDownload() {
  return (
    <footer className="bg-muted px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-3xl font-bold">Download our app</div>
            <p className="mb-6 text-white/60">
              Get the best experience on mobile. Available on iOS and Android.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background"
              >
                <div className="h-6 w-6 rounded bg-background/20" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background"
              >
                <div className="h-6 w-6 rounded bg-background/20" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
            ].map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 font-semibold">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition-colors/60 text-sm text-white hover:text-white/50"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t !border-white/60 pt-8 text-center text-sm text-white/60"
        >
          © 2025 Pure design. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}

// Footer Variant 7: Made with Love
export function FooterMadeWithLove() {
  return (
    <footer className="border-t !border-white/60 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-2xl font-bold"
            >
              Pure design
            </motion.div>
            <p className="mb-4 text-sm text-white/60">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          {[
            { title: "Explore", links: ["Features", "Pricing", "Customers"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security"] },
          ].map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="mb-4 font-semibold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors/60 text-sm text-white hover:text-white/50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 border-t !border-white/60 pt-8 md:flex-row"
        >
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span className="text-white/80">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </motion.div>
            <span className="text-white/80">in San Francisco</span>
          </div>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-colors/60 text-white hover:text-white/50"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export { FooterMinimalCentered as Footer1 };
export { FooterMultiColumn as Footer2 };
export { FooterNewsletterFocus as Footer3 };
export { FooterContactInfo as Footer4 };
export { FooterCTABanner as Footer5 };
export { FooterAppDownload as Footer6 };
export { FooterMadeWithLove as Footer7 };
