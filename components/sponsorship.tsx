"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { SponsorSlider } from "@/components/sponsor-slider";

export function Sponsorship() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiers = [
    {
      name: "Gold",
      price: "₹1,00,000",
      description: "Premium sponsorship with maximum visibility",
      features: [
        "Prime logo placement on all materials",
        "Keynote speaking opportunity",
        "Product demonstration slot",
        "5 judge positions",
        "Access to participant resumes",
        "Recruiting booth at the event",
        "Special mention in press releases",
        "Social media spotlight",
      ],
    },
    {
      name: "Silver",
      price: "₹50,000",
      description: "Enhanced visibility and engagement opportunities",
      features: [
        "Logo on event website and materials",
        "Speaking slot during the event",
        "3 judge positions",
        "Recruiting opportunity",
        "Social media mentions",
        "Branded swag distribution",
        "Access to participant data",
      ],
    },
    {
      name: "Bronze",
      price: "₹25,000",
      description: "Basic sponsorship package with good visibility",
      features: [
        "Logo on event website",
        "1 judge position",
        "Mention in opening/closing ceremonies",
        "Social media mention",
        "Branded items in participant kits",
        "Recruiting table",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-cyan-600 opacity-20 blur-3xl -top-20 -left-20"></div>
      <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-purple-600 opacity-20 blur-3xl -bottom-20 -right-20"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Sponsorship Opportunities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Partner with us to connect with the brightest minds in AI and
            showcase your brand
          </motion.p>
        </div>

        <Tabs defaultValue="tiers" className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <TabsList>
              <TabsTrigger value="tiers">Sponsorship Tiers</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="tiers" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * (index + 4) }}
                >
                  <Card
                    className={`h-full bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors ${
                      tier.name === "Gold"
                        ? "border-yellow-400/30"
                        : tier.name === "Silver"
                        ? "border-gray-400/30"
                        : "border-amber-700/30"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle>{tier.name} Sponsor</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold mb-6">{tier.price}</p>
                      <ul className="space-y-2">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check
                              size={18}
                              className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Us</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-4">
                Why Sponsor GenAIthon 2K25?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Brand Visibility</h4>
                  <p className="text-muted-foreground mb-4">
                    Showcase your brand to hundreds of talented developers,
                    researchers, and AI enthusiasts. Your logo will be featured
                    across our digital and physical platforms.
                  </p>

                  <h4 className="font-medium mb-2">Talent Recruitment</h4>
                  <p className="text-muted-foreground">
                    Connect directly with skilled participants interested in AI
                    careers. Get exclusive access to participant profiles and
                    their projects.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Product Showcase</h4>
                  <p className="text-muted-foreground mb-4">
                    Demonstrate your AI products or services to a targeted
                    audience of enthusiasts. Collect valuable feedback from
                    participants using your technology.
                  </p>

                  <h4 className="font-medium mb-2">Community Engagement</h4>
                  <p className="text-muted-foreground">
                    Support the growth of the AI community and position your
                    organization as a leader in innovation and technological
                    advancement.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-400 hover:opacity-90">
                  Download Sponsorship Prospectus
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Sponsors</h3>
            <p className="text-muted-foreground">
              The amazing organizations making GenAIthon 2K25 possible
            </p>
          </div>
          <SponsorSlider />
        </motion.div>
      </div>
    </section>
  );
}
