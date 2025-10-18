"use client";

import { motion, useInView } from "framer-motion";
import {
  Target,
  Users,
  Rocket,
  Award,
  Heart,
  Lightbulb,
  Settings,
  Cloud,
  Handshake,
  Paintbrush,
} from "lucide-react";
import { useRef } from "react";
import GlassIcons from "../GlassIcon.js";
import { CometCard } from "../ui/comet-card.js";
import { TextGenerateEffect } from "../ui/text-generate-effect.js";

// About Variant 1: Two Column Story
export function AboutTwoColumnStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-3xl bg-muted" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">
              About Us
            </div>

            <h2 className="text-balance text-4xl font-bold md:text-5xl">
              Building the future, one innovation at a time
            </h2>

            <p className="text-pretty text-lg text-muted-foreground">
              We're a team of passionate creators, developers, and designers
              committed to pushing the boundaries of what's possible on the web.
              Our mission is to empower teams to build exceptional digital
              experiences.
            </p>

            <p className="text-pretty text-lg text-muted-foreground">
              Since our founding, we've helped thousands of companies transform
              their ideas into reality, providing the tools and infrastructure
              they need to succeed in the digital age.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-foreground px-6 py-3 font-medium text-background"
            >
              Learn Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Variant 2: Values Grid
export function AboutValuesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "Every decision we make is guided by our commitment to empowering developers worldwide.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We believe in the power of collaboration and building together with our community.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Constantly pushing boundaries and exploring new possibilities in web development.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in everything we build and deliver.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in the products we create.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "Encouraging bold ideas and creative solutions to complex problems.",
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
            Our Core Values
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border p-6 transition-colors hover:border-foreground/20"
            >
              <value.icon className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Variant 3: Timeline
export function AboutTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a vision to transform web development",
    },
    {
      year: "2021",
      title: "First Product",
      description: "Launched our flagship platform to 1,000 users",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Reached 50,000 developers across 100 countries",
    },
    {
      year: "2023",
      title: "Series A",
      description: "Raised $50M to accelerate growth and innovation",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Became the go-to platform for modern web development",
    },
  ];

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Our Journey
          </h2>
          <p className="text-balance text-xl font-light text-white/70">
            From humble beginnings to industry leadership
          </p>
        </motion.div>

        <div className="space-y-12">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-8"
            >
              <div className="w-24 flex-shrink-0 text-right">
                <div className="text-3xl font-bold">{milestone.year}</div>
              </div>
              <div className="relative h-full w-px flex-shrink-0 bg-border">
                <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-foreground" />
              </div>
              <div className="flex-1 pb-12">
                <h3 className="mb-2 text-2xl font-bold">{milestone.title}</h3>
                <p className="font-light text-white/70">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Variant 4: Stats Showcase
export function AboutStatsShowcase() {
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
            Faster iteration. More innovation.
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            The platform for rapid progress. Let your team focus on shipping
            features instead of managing infrastructure.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-3xl font-bold">Collaboration</h3>
            <p className="mb-6 text-lg text-muted-foreground">
              Make teamwork seamless. Tools for your team and stakeholders to
              share feedback and iterate faster.
            </p>
            <div className="aspect-video rounded-2xl bg-background" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="mb-4 text-3xl font-bold">Performance</h3>
            <p className="mb-6 text-lg text-muted-foreground">
              Lightning-fast deployments and edge network delivery ensure your
              users get the best experience.
            </p>
            <div className="aspect-video rounded-2xl bg-background" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4"
        >
          {[
            { value: "10M+", label: "Deployments" },
            { value: "500K+", label: "Developers" },
            { value: "99.99%", label: "Uptime" },
            { value: "150+", label: "Countries" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// About Variant 5: Team Focused
export function AboutTeamFocused() {
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
            Meet the team
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            The talented people behind our success
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-muted">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full bg-gradient-to-br from-foreground/10 to-foreground/5"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold">Team Member {i}</h3>
              <p className="text-sm text-muted-foreground">Position Title</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="rounded-3xl bg-muted p-12 text-center"
        >
          <h3 className="mb-4 text-3xl font-bold">Join our team</h3>
          <p className="mb-6 text-lg text-muted-foreground">
            We're always looking for talented people to join our mission
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-foreground px-8 py-3 font-medium text-background"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// About Variant 6: Feature Highlights
export function AboutFeatureHighlights() {
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
            Why choose us
          </h2>
          <p className="text-balance text-lg !font-light text-white">
            At Pure Design, we craft stunning, high-performance web and mobile
            apps that blend creativity, technology, and business impact —
            turning your ideas into digital success stories.
          </p>
        </motion.div>

        <div className="space-y-24">
          {[
            {
              icon: (
                <GlassIcons
                  items={[
                    {
                      icon: (
                        <Paintbrush
                          className="h-10 w-10 text-white"
                          fill="#79037996"
                          strokeWidth={1.4}
                        />
                      ),
                      color: "#79037996",
                      label: "",
                    },
                  ]}
                />
              ),
              // animation: <SplashCursor />,
              uri: "design.webp",
              title: "Human-Centered UI/UX Design",
              description:
                "We craft intuitive and visually striking interfaces focused on real user needs and behavior.",
            },
            {
              icon: (
                <GlassIcons
                  items={[
                    {
                      icon: (
                        <Settings
                          className="h-10 w-10 text-white"
                          fill="#79037996"
                          strokeWidth={1.4}
                        />
                      ),
                      color: "#79037996",
                      label: "",
                    },
                  ]}
                />
              ),
              // animation: <SplashCursor />,
              uri: "mobile.webp",
              title: "Scalable Web & Mobile Development",
              description:
                "From MVPs to enterprise systems, our solutions grow effortlessly with your business.",
            },
            {
              icon: (
                <GlassIcons
                  items={[
                    {
                      icon: (
                        <Cloud
                          className="h-10 w-10 text-white"
                          fill="#79037996"
                          strokeWidth={1.4}
                        />
                      ),
                      color: "#79037996",
                      label: "",
                    },
                  ]}
                />
              ),
              // animation: <SplashCursor />,
              uri: "cloud.webp",
              title: "Cloud, API, and DevOps Integration",
              description:
                "Seamless deployment, robust API connectivity, and continuous delivery pipelines built for scale.",
            },
            {
              icon: (
                <GlassIcons
                  items={[
                    {
                      icon: (
                        <Handshake
                          className="h-10 w-10 text-white"
                          fill="#79037996"
                          strokeWidth={1.4}
                        />
                      ),
                      color: "#79037996",
                      label: "",
                    },
                  ]}
                  className="custom-class"
                />
              ),
              // animation: <SplashCursor />,
              uri: "websites.webp",
              title: "Long-Term Support & Maintenance",
              description:
                "We don’t just build—we partner with you for the long run to ensure continued success.",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {feature?.animation}

              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="mx-auto lg:mx-0">{feature?.icon}</div>
                <h3 className="mb-4 text-center text-3xl font-bold text-white lg:text-left">
                  {feature.title}
                </h3>

                <p className="text-lg font-light !text-white/60">
                  <TextGenerateEffect
                    words={feature.description}
                    className="!text-white"
                  />
                </p>
              </div>

              <div
                className={
                  i % 2 === 1 ? "custom-class md:order-1" : "custom-class"
                }
              >
                <CometCard>
                  {/* <button
                    type="button"
                    className="my-10 flex aspect-video cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
                    aria-label="View invite F7RA"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-2 flex-1">
                      <div className="relative mt-2 aspect-[3/4] w-full">
                        <img
                          loading="lazy"
                          className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                          alt="Invite background"
                          src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                      <div className="text-xs">Comet Invitation</div>
                      <div className="text-xs text-gray-300 opacity-50">
                        #F7RA
                      </div>
                    </div>
                  </button> */}
                  <div
                    className={`relative aspect-video rounded-3xl bg-muted ${
                      i % 2 === 1
                        ? "custom-class bg-black md:order-1"
                        : "custom-class bg-slate-500"
                    }`}
                  >
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Invite background"
                      src={feature?.uri}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </CometCard>
                {/* <div className="aspect-video rounded-3xl bg-muted" /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Variant 7: Mission Statement
export function AboutMissionStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-4 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-block rounded-full bg-muted px-4 py-2 text-sm font-medium">
            Our Mission
          </div>

          <h2 className="mb-8 text-balance text-5xl font-bold md:text-7xl">
            Empowering developers to build the future of the web
          </h2>

          <p className="mb-12 text-balance text-2xl font-light text-white/70">
            We believe that every developer should have access to world-class
            tools and infrastructure. Our mission is to democratize web
            development and make it accessible to everyone, everywhere.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-foreground px-8 py-4 font-medium text-background"
            >
              Join Our Mission
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full border-2 border-foreground px-8 py-4 font-medium"
            >
              Read Our Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { AboutTwoColumnStory as About1 };
export { AboutValuesGrid as About2 };
export { AboutTimeline as About3 };
export { AboutStatsShowcase as About4 };
export { AboutTeamFocused as About5 };
export { AboutFeatureHighlights as About6 };
export { AboutMissionStatement as About7 };
