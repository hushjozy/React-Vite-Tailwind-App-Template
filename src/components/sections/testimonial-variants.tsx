"use client";

import { motion, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation.js";
import { Vortex } from "../ui/vortex.js";

// Testimonial Variant 1: Card Grid
export function TestimonialCardGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content:
        "This platform has completely transformed how we build and deploy our applications. The speed and reliability are unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Lead Developer at StartupXYZ",
      content:
        "The best development experience I've ever had. The tools are intuitive and the performance is incredible.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO at InnovateLabs",
      content:
        "We've reduced our deployment time by 80%. This is exactly what modern development teams need.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Product Manager at ScaleUp",
      content:
        "The collaboration features have made our team so much more productive. Highly recommended!",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Engineering Lead at CloudTech",
      content:
        "Outstanding platform with excellent support. It's become an essential part of our workflow.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Founder at DevStudio",
      content:
        "The performance improvements we've seen are remarkable. Our users love the faster load times.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="bg-muted px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Loved by developers worldwide
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            See what our customers have to say
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-foreground" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground">
                {testimonial.content}
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Variant 2: Carousel
export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "VP of Engineering",
      company: "TechGiant Inc",
      content:
        "The platform has exceeded all our expectations. Our team's productivity has increased by 200% since we made the switch.",
      image: "/professional-headshot.png",
    },
    {
      name: "Maria Garcia",
      role: "Head of Product",
      company: "InnovateCo",
      content:
        "Absolutely game-changing. The ease of use combined with powerful features makes this the perfect solution for our needs.",
      image: "/professional-headshot.png",
    },
    {
      name: "Robert Lee",
      role: "Senior Developer",
      company: "CodeMasters",
      content:
        "I've tried many platforms, but this one stands out. The developer experience is phenomenal and the support is top-notch.",
      image: "/professional-headshot.png",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            What our customers say
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="text-center"
          >
            <Quote className="mx-auto mb-6 h-12 w-12 opacity-20" />
            <p className="mb-8 text-balance text-2xl">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-16 w-16 rounded-full bg-muted" />
              <div className="text-left">
                <div className="font-bold">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${i === currentIndex ? "bg-foreground" : "bg-muted"}`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="rounded-full border border-border p-2 transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonial Variant 3: Featured Quote
export function TestimonialFeaturedQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-foreground px-4 py-32 text-background">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Quote className="mx-auto mb-8 h-16 w-16 opacity-50" />
          <blockquote className="mb-8 text-balance text-3xl font-bold md:text-5xl">
            "This platform has revolutionized how we build and ship products.
            It's simply the best tool we've ever used."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-background/20 h-16 w-16 rounded-full" />
            <div className="text-left">
              <div className="text-lg font-bold">Jennifer Martinez</div>
              <div className="text-background/70">
                Chief Technology Officer, GlobalTech
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonial Variant 4: Video Testimonials
export function TestimonialVideoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Hear from our customers
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Real stories from real users
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl bg-muted">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="from-foreground/10 to-foreground/5 flex h-full w-full items-center justify-center bg-gradient-to-br"
                >
                  <div className="bg-foreground/20 flex h-16 w-16 items-center justify-center rounded-full">
                    <div className="border-l-12 ml-1 h-0 w-0 border-b-8 border-t-8 border-b-transparent border-l-foreground border-t-transparent" />
                  </div>
                </motion.div>
              </div>
              <h3 className="mb-1 text-lg font-bold">Customer Story {i}</h3>
              <p className="text-sm text-muted-foreground">
                Company Name • Industry
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Variant 5: Masonry Layout
export function TestimonialMasonry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "John Doe",
      role: "Developer",
      content: "Amazing platform! Highly recommend.",
      short: true,
    },
    {
      name: "Jane Smith",
      role: "Designer",
      content:
        "The design tools are incredible. I can create beautiful interfaces in minutes. The collaboration features make working with my team seamless.",
      short: false,
    },
    {
      name: "Bob Johnson",
      role: "Manager",
      content: "Great for team collaboration and productivity.",
      short: true,
    },
    {
      name: "Alice Brown",
      role: "Engineer",
      content:
        "Best development experience I've had. The performance is outstanding and the features are exactly what we need.",
      short: false,
    },
    {
      name: "Charlie Davis",
      role: "Founder",
      content: "Transformed our workflow completely!",
      short: true,
    },
    {
      name: "Diana Wilson",
      role: "Product Lead",
      content:
        "The analytics and insights have helped us make better decisions. Couldn't be happier with the results.",
      short: false,
    },
  ];

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Trusted by thousands
          </h2>
        </motion.div>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid rounded-2xl bg-muted p-6"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-foreground" />
                ))}
              </div>
              <p className="mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-background" />
                <div>
                  <div className="text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Variant 6: Marquee Scroll
export function TestimonialMarquee() {
  const testimonials = [
    {
      name: "Sarah K.",
      content:
        "Pure Design turned my vague idea into a stunning digital product. I couldn’t be happier!",
      rating: 5,
    },
    {
      name: "Chinedu A.",
      content:
        "They delivered fast, communicated clearly, and the final website looks incredible.",
      rating: 5,
    },
    {
      name: "Amara N.",
      content:
        "Exceptional design sense and technical expertise. My app runs smoothly on every device.",
      rating: 4,
    },
    {
      name: "Tobi F.",
      content:
        "Working with Pure Design was a breeze. They really understand modern user experience.",
      rating: 5,
    },
    {
      name: "Lara O.",
      content:
        "Creative, professional, and reliable. I’ll definitely work with them again on future projects.",
      rating: 5,
    },
    {
      name: "James M.",
      content:
        "They completely transformed our old platform into something sleek and efficient.",
      rating: 4,
    },
    {
      name: "Ifeanyi E.",
      content:
        "From concept to deployment, everything was handled with care and excellence.",
      rating: 5,
    },
  ];
  return (
    <Vortex>
      <section className="overflow-hidden py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance bg-gradient-to-b from-white/70 to-white/90 bg-clip-text text-4xl font-bold text-transparent drop-shadow-2xl md:text-5xl">
            Join thousands of happy customers
          </h2>
        </div>

        <div className="relative">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 80,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={i}
                className="w-80 flex-shrink-0 rounded-2xl border !border-white/80 bg-black/50 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 from-white/70 to-white/90 bg-clip-text fill-transparent text-[#ecb620] drop-shadow-2xl"
                    />
                  ))}
                </div>
                <p className="mb-4 bg-gradient-to-b from-white/70 to-white/90 bg-clip-text font-light text-transparent drop-shadow-2xl">
                  {testimonial.content}
                </p>
                <div className="bg-gradient-to-b from-white/70 to-white/90 bg-clip-text font-semibold text-transparent drop-shadow-2xl">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>{" "}
    </Vortex>
  );
}

// Testimonial Variant 7: Stats with Quotes
export function TestimonialStatsQuotes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-muted px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Proven results
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "4.9/5", label: "Customer Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-5xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              quote:
                "The ROI has been incredible. We've seen a 300% increase in productivity.",
              name: "Mark Stevens",
              role: "Operations Director",
            },
            {
              quote:
                "Customer support is phenomenal. They're always there when we need them.",
              name: "Rachel Green",
              role: "IT Manager",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-2xl bg-background p-8"
            >
              <Quote className="mb-4 h-8 w-8 opacity-20" />
              <p className="mb-4 text-lg">{testimonial.quote}</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">
                {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TestimonialCardGrid as Testimonial1 };
export { TestimonialCarousel as Testimonial2 };
export { TestimonialFeaturedQuote as Testimonial3 };
export { TestimonialVideoGrid as Testimonial4 };
export { TestimonialMasonry as Testimonial5 };
export { TestimonialMarquee as Testimonial6 };
export { TestimonialStatsQuotes as Testimonial7 };
