"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Background Gradient Orbs */}
      <div className="absolute -z-10 h-[600px] w-[600px] rounded-full bg-cyan-600 opacity-20 blur-3xl -top-40 -left-40"></div>
      <div className="absolute -z-10 h-[600px] w-[600px] rounded-full bg-purple-600 opacity-20 blur-3xl -bottom-40 -right-40"></div>

      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-6"
        >
          <Image
            src="/acm_mato.jpg" // Path relative to the public folder
            alt="Image 1"
            width={75} // Adjust width
            height={75} // Adjust height
            className="rounded-full object-cover"
          />
          <Image
            src="/acm_w.jpg"
            alt="Image 2"
            width={75}
            height={75}
            className="rounded-full object-cover"
          />
          <Image
            src="/acm_kbtcoe.jpg"
            alt="Image 3"
            width={75}
            height={75}
            className="rounded-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600">
            GenAIthon 2K25
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          The ultimate Generative AI Hackathon, hosted by Matoshri ACM Student
          Chapter in collaboration with MVP's KBT ACM Student Chapter
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="https://unstop.com/p/genaithon-2k25-matoshri-college-of-engineering-nashik-1457683"
            passHref
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:opacity-90 text-white"
            >
              Register Now
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 relative"
        >
          <div className="py-2 px-4 rounded-full bg-muted/30 backdrop-blur-sm border border-muted/20 inline-block">
            <span className="text-sm font-medium">
              <span className="text-green-500">●</span> Applications Open Now
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
