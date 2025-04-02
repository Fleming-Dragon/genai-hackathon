"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, BrainCircuit, Users, Trophy, Compass, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EventDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featureVariants = {
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

  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AI & Machine Learning",
      description: "Focus on generative AI models, large language models, and machine learning algorithms",
    },
    {
      icon: <Users size={24} />,
      title: "Who Can Participate",
      description: "Open to all undergraduate and graduate students, as well as recent graduates (within 1 year)",
    },
    {
      icon: <Trophy size={24} />,
      title: "Prizes",
      description: "₹1,00,000+ prize pool, internship opportunities, and networking with industry experts",
    },
    {
      icon: <Code2 size={24} />,
      title: "Tech Stack",
      description: "Python, TensorFlow, PyTorch, Hugging Face, OpenAI, and other generative AI frameworks",
    },
    {
      icon: <Compass size={24} />,
      title: "Categories",
      description: "Content generation, image synthesis, code generation, voice synthesis, and more",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Challenges",
      description: "Real-world problems provided by industry partners requiring innovative AI solutions",
    },
  ]

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background decorative element */}
      <div className="absolute -z-10 inset-0 bg-grid-slate-900/[0.04] bg-[top_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-[top_1px_center] bg-grid"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Details</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about the GenAIthon 2K25 hackathon
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:opacity-90">
            Download Event Brochure
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

