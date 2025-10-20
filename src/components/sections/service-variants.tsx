"use client";

import { motion, useInView } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  Code,
  Smartphone,
  Cloud,
  Database,
  Lock,
  Rocket,
  Users,
  BarChart,
  Settings,
  Palette,
  Search,
  MessageSquare,
  TrendingUp,
  Award,
  Target,
  IdCard,
  BarChart3,
  Plug,
  PenTool,
} from "lucide-react";
import { useRef, useState } from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation.js";

// Service Variant 1: Icon Grid
export function ServiceIconGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites, dashboards, and enterprise-grade web apps using React, Next.js, Node.js, and more.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform apps built with React Native and Flutter for iOS and Android.",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Interactive, research-driven designs focused on usability, beauty, and conversion.",
    },
    {
      icon: IdCard,
      title: "Branding & Identity",
      description:
        "Logo design, visual systems, and digital brand storytelling that elevate your brand.",
    },
    {
      icon: Plug,
      title: "API & Integrations",
      description:
        "Secure, high-performance API and system integrations to power your business and connect your tools.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure and deployment pipelines designed for security and performance.",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Secure and efficient database design, storage, and optimization for business-critical data.",
    },
    {
      icon: BarChart3,
      title: "Maintenance & Growth",
      description:
        "Continuous updates, analytics tracking, and optimization for speed, security, and conversion.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Lightning-fast load times, smooth animations, and SEO-friendly builds that deliver results.",
    },
  ];

  return (
    <section ref={ref} className="px-4 py-0 lg:py-20">
      <BackgroundGradientAnimation>
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance bg-gradient-to-b from-white/70 to-white/90 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Our Services
            </h2>
            <p className="text-balance text-xl font-light text-white/70">
              We bring ideas to life across every screen. Our full-stack
              capabilities ensure pixel-perfect design meets robust engineering.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border !border-white/80 p-6 transition-colors hover:border-white"
              >
                {service.icon && (
                  <service.icon className="mb-4 h-12 w-12 !text-white" />
                )}
                {/* <PointerHighlight pointerClassName="hidden"> */}
                <h3 className="mb-2 text-xl font-bold !text-white">
                  {service.title}
                </h3>
                {/* </PointerHighlight> */}
                <p className="font-light text-white/70">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}

// Service Variant 2: Bento Layout
export function ServiceBentoLayout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-muted px-4 py-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            What we offer
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Comprehensive solutions for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="flex min-h-[400px] flex-col justify-between rounded-3xl bg-background p-8 md:col-span-2 md:row-span-2"
          >
            <div>
              <Zap className="mb-6 h-16 w-16" />
              <h3 className="mb-4 text-3xl font-bold">
                Lightning Fast Performance
              </h3>
              <p className="text-lg text-muted-foreground">
                Optimized for speed with cutting-edge technology and best
                practices
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="min-h-[192px] rounded-3xl bg-background p-8 md:col-span-2"
          >
            <Globe className="mb-4 h-12 w-12" />
            <h3 className="mb-2 text-2xl font-bold">Global Reach</h3>
            <p className="text-muted-foreground">
              Deploy worldwide with our edge network
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="min-h-[192px] rounded-3xl bg-background p-8 md:col-span-2"
          >
            <Lock className="mb-4 h-12 w-12" />
            <h3 className="mb-2 text-2xl font-bold">Enterprise Security</h3>
            <p className="text-muted-foreground">
              Bank-level security for your data
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex min-h-[200px] items-center justify-center rounded-3xl bg-foreground p-8 text-center text-background md:col-span-4"
          >
            <div>
              <h3 className="mb-4 text-3xl font-bold">Ready to get started?</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-background px-8 py-3 font-medium text-foreground"
              >
                Contact Us Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Service Variant 3: Tabbed Services
export function ServiceTabbedLayout() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Design",
      icon: Palette,
      description: "Beautiful, user-centric designs that convert",
      features: [
        "UI/UX Design",
        "Brand Identity",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      title: "Development",
      icon: Code,
      description: "Robust, scalable applications built to last",
      features: [
        "Web Development",
        "Mobile Apps",
        "API Integration",
        "Custom Solutions",
      ],
    },
    {
      title: "Marketing",
      icon: TrendingUp,
      description: "Data-driven strategies that drive growth",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media",
        "Analytics",
      ],
    },
    {
      title: "Support",
      icon: MessageSquare,
      description: "24/7 support to keep you running smoothly",
      features: ["Technical Support", "Maintenance", "Updates", "Consulting"],
    },
  ];

  const ActiveIcon = services[activeTab].icon;

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Our Expertise
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Full-service solutions for your business
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {services.map((service, i) => (
            <motion.button
              key={service.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-6 py-3 font-medium transition-colors ${
                activeTab === i ? "bg-foreground text-background" : "bg-muted"
              }`}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div>
            <ActiveIcon className="mb-6 h-16 w-16" />
            <h3 className="mb-4 text-3xl font-bold">
              {services[activeTab].title}
            </h3>
            <p className="mb-6 text-lg text-muted-foreground">
              {services[activeTab].description}
            </p>
            <ul className="space-y-3">
              {services[activeTab].features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square rounded-3xl bg-muted" />
        </motion.div>
      </div>
    </section>
  );
}

// Service Variant 4: Process Steps
export function ServiceProcessSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business goals and requirements",
    },
    {
      number: "02",
      title: "Strategy",
      description: "We create a comprehensive plan tailored to your needs",
    },
    {
      number: "03",
      title: "Design",
      description: "We craft beautiful, user-friendly interfaces",
    },
    {
      number: "04",
      title: "Development",
      description: "We build robust, scalable solutions",
    },
    {
      number: "05",
      title: "Testing",
      description: "We ensure everything works perfectly",
    },
    {
      number: "06",
      title: "Launch",
      description: "We deploy and monitor your success",
    },
  ];

  return (
    <section ref={ref} className="bg-muted px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Our Process
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            A proven approach to delivering excellence
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-background p-6"
            >
              <div className="mb-4 text-5xl font-bold opacity-20">
                {step.number}
              </div>
              <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Variant 5: Feature Comparison
export function ServiceFeatureComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time updates",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track performance with detailed insights",
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailor everything to your specific needs",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find anything instantly with powerful search",
    },
    {
      icon: Award,
      title: "Premium Support",
      description: "Get help whenever you need it from experts",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Monitor progress and achieve your objectives",
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
            Powerful Features
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Everything you need in one platform
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {feature.icon && <feature.icon className="mb-4 h-12 w-12" />}
                <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-video rounded-2xl bg-muted" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Variant 6: Pricing Tiers
export function ServicePricingTiers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals and small projects",
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Support",
        "Core Features",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited Projects",
        "100GB Storage",
        "Priority Support",
        "Advanced Features",
        "Team Collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited Everything",
        "Dedicated Support",
        "Custom Integration",
        "SLA Guarantee",
        "Advanced Security",
      ],
    },
  ];

  return (
    <section ref={ref} className="bg-muted px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-balance text-xl text-muted-foreground">
            Choose the plan that's right for you
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl bg-background p-8 ${tier.popular ? "scale-105 ring-2 ring-foreground" : ""}`}
            >
              {tier.popular && (
                <div className="mb-4 inline-block rounded-full bg-foreground px-3 py-1 text-sm font-medium text-background">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
              <div className="mb-2 text-4xl font-bold">{tier.price}</div>
              <p className="mb-6 text-muted-foreground">{tier.description}</p>
              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-foreground/10">
                      <div className="h-2 w-2 rounded-full bg-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full rounded-full py-3 font-medium ${
                  tier.popular ? "bg-foreground text-background" : "bg-muted"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Variant 7: CTA Focus
export function ServiceCTAFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Code, title: "Development", count: "500+ Projects" },
    { icon: Palette, title: "Design", count: "300+ Designs" },
    { icon: Rocket, title: "Launch", count: "1000+ Deployments" },
    { icon: Users, title: "Support", count: "24/7 Available" },
  ];

  return (
    <section ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <h2 className="mb-6 text-balance text-4xl font-bold md:text-5xl">
              Transform your business with our services
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              We provide end-to-end solutions that help you achieve your goals
              faster. From concept to launch, we're with you every step of the
              way.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-foreground px-8 py-3 font-medium text-background"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-full border-2 border-border px-8 py-3 font-medium"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="grid grid-cols-2 gap-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-muted p-6 text-center"
              >
                {service.icon && (
                  <service.icon className="mx-auto mb-3 h-10 w-10" />
                )}
                <div className="mb-1 font-bold">{service.title}</div>
                <div className="text-sm text-muted-foreground">
                  {service.count}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ServiceIconGrid as Service1 };
export { ServiceBentoLayout as Service2 };
export { ServiceTabbedLayout as Service3 };
export { ServiceProcessSteps as Service4 };
export { ServiceFeatureComparison as Service5 };
export { ServicePricingTiers as Service6 };
export { ServiceCTAFocus as Service7 };
