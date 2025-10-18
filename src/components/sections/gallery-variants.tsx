"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { X, ZoomIn, ExternalLink } from "lucide-react";
import { sample } from "@/lib/utils.js";

// Gallery Variant 1: Grid Layout
export function GalleryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: ["Design", "Development", "Branding"][i % 3],
  }));

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Our Work
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            A showcase of our latest projects
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-foreground/80"
              >
                <div className="te!xt-white text-center">
                  <div className="mb-2 text-xl font-bold">{image.title}</div>
                  <div className="text-sm">{image.category}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Variant 2: Masonry Layout
export function GalleryMasonry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { id: 1, height: "tall", title: "Project Alpha" },
    { id: 2, height: "short", title: "Project Beta" },
    { id: 3, height: "medium", title: "Project Gamma" },
    { id: 4, height: "short", title: "Project Delta" },
    { id: 5, height: "tall", title: "Project Epsilon" },
    { id: 6, height: "medium", title: "Project Zeta" },
  ];

  return (
    <section ref={ref} className="bg-muted px-4 pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold text-white md:text-5xl">
            Portfolio
          </h2>
          <p className="text-balance text-xl text-white/70">
            Explore our creative work
          </p>
        </motion.div>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {sample?.slice(0, 6)?.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`cursor-pointer break-inside-avoid overflow-hidden rounded-2xl !bg-white/50 ${
                image.height === "tall"
                  ? "h-96"
                  : image.height === "medium"
                    ? "h-72"
                    : "h-48"
              }`}
            >
              {" "}
              <img
                src={image.thumbnail}
                height="600"
                width="600"
                className="h-full w-full object-cover object-left-top"
                alt={image.title}
              />
              {/* <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
                <div className="text-center">
                  <div className="text-xl font-bold">{image.title}</div>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Variant 3: Lightbox
export function GalleryLightbox() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Image ${i + 1}`,
    description: "Beautiful photography and design work",
  }));

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Gallery
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Click to view full size
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-foreground/60"
              >
                <ZoomIn className="te!xt-white h-12 w-12" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative aspect-video w-full max-w-4xl rounded-2xl bg-muted"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full !bg-white/50"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Gallery Variant 4: Carousel
export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Featured Work ${i + 1}`,
    description: "A showcase of our best creative projects",
  }));

  return (
    <section ref={ref} className="bg-muted px-4 pb-5 lg:pb-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold !text-white md:text-5xl">
            Featured Projects
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 aspect-video overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
              <img
                src={sample[currentIndex]?.thumbnail}
                height="600"
                width="600"
                className="h-full w-full object-cover object-left-top"
                alt={sample[currentIndex]?.title}
              />
            </div>
          </motion.div>

          <div className="flex w-full justify-start gap-2 overflow-x-auto">
            <div className="flex w-fit justify-center gap-2">
              {sample?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-12 min-w-12 rounded-lg transition-colors ${
                    i === currentIndex ? "bg-foreground" : "!bg-white/50"
                  }`}
                >
                  {" "}
                  <img
                    src={img.thumbnail}
                    height="600"
                    width="600"
                    className="h-full w-full object-cover object-left-top"
                    alt={img.title}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Variant 5: Hover Cards
export function GalleryHoverCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { id: 1, title: "E-commerce Platform", client: "RetailCo", year: "2024" },
    { id: 2, title: "Mobile Banking App", client: "FinTech Inc", year: "2024" },
    { id: 3, title: "SaaS Dashboard", client: "StartupXYZ", year: "2023" },
    { id: 4, title: "Brand Identity", client: "CreativeCo", year: "2023" },
    { id: 5, title: "Marketing Website", client: "AgencyCo", year: "2024" },
    { id: 6, title: "Product Design", client: "TechCorp", year: "2023" },
  ];

  return (
    <section ref={ref} className="px-4 pb-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="my-10 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold text-white md:text-5xl">
            Recent Projects
          </h2>
          {/* <p className="text-balance text-xl !text-white">
            Hover to see details
          </p> */}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sample?.slice(6, 12)?.map((image, i) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white/50"
            >
              <img
                src={image.thumbnail}
                height="600"
                width="600"
                className="h-full w-full object-cover object-left-top"
                alt={image.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Gallery Variant 6: Bento Grid
export function GalleryBentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-muted px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold !text-white md:text-5xl">
            Creative Showcase
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full min-h-[400px] w-full items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
              <div className="text-2xl font-bold !text-white">
                Featured Project
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 cursor-pointer overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full min-h-[192px] w-full items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
              <div className="text-xl font-bold !text-white">Project 2</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 cursor-pointer overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full min-h-[192px] w-full items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
              <div className="text-lg font-bold !text-white">3</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 cursor-pointer overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full min-h-[192px] w-full items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
              <div className="text-lg font-bold !text-white">4</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 cursor-pointer overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full min-h-[192px] w-full items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
              <div className="text-xl font-bold !text-white">Project 5</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 cursor-pointer overflow-hidden rounded-3xl !bg-white/50"
          >
            <div className="flex h-full min-h-[192px] w-full items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
              <div className="text-xl font-bold !text-white">Project 6</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Gallery Variant 7: Filterable
export function GalleryFilterable() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = ["All", "Design", "Development", "Branding", "Photography"];
  const projects = [
    { id: 1, title: "Project 1", category: "Design" },
    { id: 2, title: "Project 2", category: "Development" },
    { id: 3, title: "Project 3", category: "Branding" },
    { id: 4, title: "Project 4", category: "Photography" },
    { id: 5, title: "Project 5", category: "Design" },
    { id: 6, title: "Project 6", category: "Development" },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Our Work
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Filter by category
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                activeFilter === filter
                  ? "te!xt-white bg-foreground"
                  : "bg-muted"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5 }}
              className="aspect-square cursor-pointer overflow-hidden rounded-2xl bg-muted"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
                <div className="text-center">
                  <div className="mb-2 text-xl font-bold">{project.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { GalleryGrid as Gallery1 };
export { GalleryMasonry as Gallery2 };
export { GalleryLightbox as Gallery3 };
export { GalleryCarousel as Gallery4 };
export { GalleryHoverCards as Gallery5 };
export { GalleryBentoGrid as Gallery6 };
export { GalleryFilterable as Gallery7 };
