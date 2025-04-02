"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineEvents = [
    {
      date: "March 31, 2025",
      title: "Registration Opens",
      description:
        "Team registration begins. Form teams of 2-4 members and submit your initial proposal.",
    },
    {
      date: "April 7, 2025",
      title: "Registration Closes",
      description:
        "Last day to register your team and submit your proposal for the hackathon.",
    },
    {
      date: "April 8, 2025",
      title: "Round 1 Submission (Online)",
      description:
        "Teams submit their projects online for the first round of evaluation.",
    },
    {
      date: "April 9, 2025",
      title: "Round 2 Judging (Online)",
      description:
        "Judges evaluate the submissions and shortlist teams for the next round.",
    },
    {
      date: "April 10, 2025",
      title: "Round 2 Results",
      description:
        "Announcement of the teams that have qualified for the final round.",
    },
    {
      date: "April 17, 2025",
      title: "Final Round (at Nashik)",
      description:
        "Finalists compete in Nashik, presenting their projects to the jury.",
    },
    {
      date: "April 17, 2025",
      title: "Award Ceremony",
      description: "Winners are announced and awards are distributed.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Event Timeline
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Mark your calendar with these key dates for GenAIthon 2K25
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-cyan-400 to-purple-600 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cn(
                  "md:flex items-center",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Date column */}
                <div className="md:w-1/2 mb-4 md:mb-0 relative">
                  <div
                    className={cn(
                      "md:max-w-md",
                      index % 2 === 0
                        ? "md:mr-8 ml-auto text-right"
                        : "md:ml-8 text-left"
                    )}
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-400 text-white p-1 px-3 rounded-full inline-block text-sm font-medium">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-semibold mt-2 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Circle indicator */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 hidden md:block"></div>

                {/* Empty column for layout */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
