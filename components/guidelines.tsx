"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Download,
  Calendar,
  Users,
  Code,
  FileText,
  AlertTriangle,
} from "lucide-react";

export function Guidelines() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Guidelines
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Important information for all participants
          </motion.p>
        </div>

        <Tabs defaultValue="submission" className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="submission">Rounds</TabsTrigger>
              <TabsTrigger value="rules">Rules</TabsTrigger>
              <TabsTrigger value="judging">Judging</TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="submission" className="mt-4 space-y-6">
            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-cyan-400/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="text-primary" size={20} />
                  </div>
                  <CardTitle>
                    Submission Round: Online (31 March - 8 April)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Round 1 Submission (Online)</p>
                      <p className="text-muted-foreground">
                        From the given list of Problem Statements Students
                        Should Select One Problem Statement submit their PPt
                        .Teams need to create a PowerPoint presentation using
                        the provided template. The presentation must be a
                        minimum of 5 slides and a maximum of 6 slides. The
                        presentation must be submitted by the specified
                        deadline, i.e., 7th April, 11:59 PM IST.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-2 flex items-center gap-2"
                      >
                        <Download size={16} /> Download Template
                      </Button>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Round 1 Judging (Online)</p>
                      <p className="text-muted-foreground">
                        The selected students will go to the next round for
                        presentation. The students that are not selected get a
                        refund of the fee.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-cyan-400/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="text-primary" size={20} />
                  </div>
                  <CardTitle>Round 2: Online (9th April, 2025)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Presentation Round</p>
                      <p className="text-muted-foreground">
                        Participants will present their submitted idea to the
                        panelists within a 10-minute time span for one problem
                        statement on the Google Meet platform. Make every second
                        count and let your creativity shine! Please note that it
                        is mandatory for all participants to present for this
                        round. Failure to do so could result in
                        disqualification.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Screening Process</p>
                      <p className="text-muted-foreground">
                        Submission will be screened by the judging panel based
                        on creativity, feasibility, and relevance to the chosen
                        problem statements. Results will be announced on the
                        GenAIton website on 10th April, 2025.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-cyan-400/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="text-primary" size={20} />
                  </div>
                  <CardTitle>Round 3: Offline (17th April, 2025)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Attendance</p>
                      <p className="text-muted-foreground">
                        All members of the team must be present at MCOERC for
                        the offline round. All team members are required to
                        carry their College ID cards.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <p className="font-medium">AI Project</p>
                      <p className="text-muted-foreground">
                        Teams are required to develop a fully functional AI
                        project based on the problem statement they chose in
                        Round 1. Teams must submit their project code to the
                        judges for evaluation.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Presentation</p>
                      <p className="text-muted-foreground">
                        Teams will present their working model to a panel of
                        judges. The presentation should cover the project's
                        features, design, functionality, and the problem-solving
                        approach.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="mt-4">
            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-cyan-400/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="text-primary" size={20} />
                  </div>
                  <CardTitle>Rules of Conduct</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Eligibility</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>The hackathon is open to college students only.</li>
                        <li>Each team must consist of two to four members.</li>
                        <li>
                          Teams must register on the GenAIthon website by the
                          specified registration deadline.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Team Formation</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>Team must consist of two to four members.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Submission Format</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          For Round 1, the PowerPoint submitted must follow the
                          provided template.
                        </li>
                        <li>
                          For Round 2, the PowerPoint presentation should solve
                          the selected problem statement.
                        </li>
                        <li>
                          For Round 3, the Project code must be clean,
                          well-documented, and submitted in the specified
                          format.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">
                        Required Items for Offline Round
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          Participants must carry their own laptops and any
                          other necessary equipment.
                        </li>
                        <li>
                          Each participant must bring a valid college ID card
                          for verification.
                        </li>
                        <li>
                          Teams should have backup copies of their work on
                          external drives or cloud storage.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Code of Conduct</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          All participants must adhere to the principles of
                          respect, integrity, and professionalism.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">
                        Intellectual Property
                      </h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          All submissions remain the intellectual property of
                          the organizers.
                        </li>
                        <li>
                          By submitting an entry, participants grant the
                          organizers the right to use the materials for
                          promotional purposes.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Disqualification</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          Failure to comply with any of the guidelines and rules
                          may result in disqualification from the hackathon.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Support and Queries</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          Participants can reach out to the GenAIthon support
                          team via the contact information provided on the
                          website for any queries or assistance.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">Health and Safety</h4>
                      <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                        <li>
                          Participants must follow all health and safety
                          guidelines provided by MCOERC.
                        </li>
                        <li>
                          Emergency contact information and medical facilities
                          will be available on-site.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="judging" className="mt-4">
            <Card>
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-cyan-400/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={20} />
                  </div>
                  <CardTitle>Judging Criteria</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-card/50 p-4 rounded-lg border border-muted hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">
                      Innovation and Creativity
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Originality of the idea and creative approach to solving
                      the problem statement.
                    </p>
                  </div>

                  <div className="bg-card/50 p-4 rounded-lg border border-muted hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Technical Execution</h4>
                    <p className="text-sm text-muted-foreground">
                      Quality of code, functionality, and implementation of
                      features.
                    </p>
                  </div>

                  <div className="bg-card/50 p-4 rounded-lg border border-muted hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">
                      User Experience and Design
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Intuitive interface, visual appeal, and overall user
                      experience.
                    </p>
                  </div>

                  <div className="bg-card/50 p-4 rounded-lg border border-muted hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <h4 className="font-medium mb-2">
                      Relevance to Problem Statement
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      How well the solution addresses the chosen problem
                      statement.
                    </p>
                  </div>

                  <div className="bg-card/50 p-4 rounded-lg border border-muted hover:border-primary/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <h4 className="font-medium mb-2">
                      Presentation and Communication
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Clarity of presentation, ability to explain the solution,
                      and answer questions effectively.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
