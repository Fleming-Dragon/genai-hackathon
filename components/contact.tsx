"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coordinators = [
    {
      name: "John Doe",
      designation: "Event Manager",
      phone: "+91 9876543211",
    },
    {
      name: "Jane Smith",
      designation: "Technical Lead",
      phone: "+91 9876543212",
    },
    {
      name: "Alice Johnson",
      designation: "Logistics Coordinator",
      phone: "+91 9876543213",
    },
    {
      name: "John Doe",
      designation: "Event Manager",
      phone: "+91 9876543211",
    },
    {
      name: "Jane Smith",
      designation: "Technical Lead",
      phone: "+91 9876543212",
    },
    {
      name: "Alice Johnson",
      designation: "Logistics Coordinator",
      phone: "+91 9876543213",
    },
  ];

  return (
    <section ref={ref} className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet Our Coordinators
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordinators.map((coordinator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{coordinator.name}</h3>
              <p className="text-muted-foreground mb-2">
                {coordinator.designation}
              </p>
              <a
                href={`tel:${coordinator.phone}`}
                className="text-primary font-medium hover:underline"
              >
                {coordinator.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
