"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Cpu, GraduationCap } from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About GenAIthon
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collaborative initiative by Matoshri College and MVP's KBT ACM Student Chapters to foster innovation in
            Generative AI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <motion.div custom={0} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <Card className="h-full bg-card/50 backdrop-blur-sm border border-muted hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <CardTitle>Matoshri College</CardTitle>
                <CardDescription>
                  A premier engineering institution with a focus on technological innovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Matoshri College of Engineering promotes excellence in technical education by fostering a culture of
                  innovation, research, and entrepreneurship.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={1} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <Card className="h-full bg-card/50 backdrop-blur-sm border border-muted hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <CardTitle>ACM Student Chapters</CardTitle>
                <CardDescription>Collaborative effort between two ACM Student Chapters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The Association for Computing Machinery (ACM) student chapters promote computing knowledge, organize
                  events, and create networking opportunities for students passionate about computing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={cardVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <Card className="h-full bg-card/50 backdrop-blur-sm border border-muted hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Cpu className="text-primary" size={24} />
                </div>
                <CardTitle>GenAIthon Purpose</CardTitle>
                <CardDescription>Advancing innovation in Generative AI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  GenAIthon 2K25 aims to bring together talented students, researchers, and professionals to explore and
                  advance the frontiers of Generative AI through competitive problem-solving and creative innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

