"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problemStatements = [
  {
    id: 1,
    title: "AI-Generated Personalized Workout Plans",
    description:
      "Develop an AI system that creates custom fitness routines based on a user’s body type, goals, and available equipment.",
  },
  {
    id: 2,
    title: "Generative AI for Architectural Blueprint Design",
    description:
      "Create an AI model that generates architectural blueprints for homes and buildings based on user preferences and land constraints.",
  },
  {
    id: 3,
    title: "AI-Powered Personalized Diet Planner",
    description:
      "Develop an AI system that generates meal plans based on dietary restrictions, calorie intake, and fitness goals.",
  },
  {
    id: 4,
    title: "Generative AI-Powered Language Translator with Context Awareness",
    description:
      "Build an AI model that translates languages while preserving cultural context and emotional tone for accurate communication.",
  },
  {
    id: 5,
    title: "AI-Based Personalized Makeup & Hairstyle Generator",
    description:
      "Develop an AI tool that suggests makeup looks and hairstyles based on a person’s facial features and skin tone.",
  },
  {
    id: 6,
    title: "AI-Powered Scientific Paper Generator",
    description:
      "Create an AI model that generates scientific research papers, including hypothesis generation, literature review, and experiment design.",
  },
  {
    id: 7,
    title: "Generative AI for Automated Cartoon/Comic Strip Creation",
    description:
      "Develop an AI system that creates comic strips based on text prompts, including character dialogue, panel layout, and art style.",
  },
  {
    id: 8,
    title: "AI-Powered Personalized Travel Itinerary Generator",
    description:
      "Build an AI system that plans detailed travel itineraries based on user preferences, budget, and real-time weather conditions.",
  },
  {
    id: 9,
    title: "Generative AI for Video Summarization & Highlight Extraction",
    description:
      "Create an AI tool that summarizes long videos into short highlights by identifying key moments and important content.",
  },
  {
    id: 10,
    title: "AI-Powered Personalized Smart Home Assistant",
    description:
      "Develop an AI model that generates home automation scripts, optimizing energy usage and personalizing smart device interactions.",
  },
  {
    id: 11,
    title: "Generative AI for Personalized Home Gardening Plans",
    description:
      "Build an AI system that suggests garden layouts, plant care guides, and watering schedules based on location and climate.",
  },
  {
    id: 12,
    title: "AI-Powered Personalized Event Planner",
    description:
      "Create an AI tool that generates custom event plans, including venue selection, catering, decoration themes, and schedules.",
  },
  {
    id: 13,
    title: "AI-Generated Data-Driven Movie Scripts",
    description:
      "Develop an AI model that creates original movie scripts based on trending topics, audience preferences, and storyline inputs.",
  },
  {
    id: 14,
    title: "Generative AI for Personalized Therapy & Emotional Support",
    description:
      "Build an AI chatbot that provides emotional support and therapy by generating personalized responses based on user sentiment.",
  },
  {
    id: 15,
    title: "AI-Powered Automated Podcast Host",
    description:
      "Develop an AI system that hosts and generates podcast discussions based on trending topics and audience engagement.",
  },
  {
    id: 16,
    title: "Generative AI for Personalized Job Interview Preparation",
    description:
      "Create an AI tool that generates mock interview questions and answers, personalized for different job roles.",
  },
  {
    id: 17,
    title: "AI-Powered Digital Art Generator for NFTs",
    description:
      "Develop an AI model that creates unique NFT artworks based on customizable themes and styles.",
  },
  {
    id: 18,
    title: "AI-Powered Dynamic Ad Campaign Creator",
    description:
      "Build an AI system that generates personalized advertisement strategies with auto-generated ad copies, images, and slogans.",
  },
  {
    id: 19,
    title: "AI-Powered Personal Financial Advisor",
    description:
      "Develop an AI tool that analyzes spending habits and generates financial plans, including budgeting and investment strategies.",
  },
  {
    id: 20,
    title: "Generative AI-Powered Startup Idea Generator",
    description:
      "Create an AI system that suggests innovative startup ideas, business models, and funding strategies based on market trends.",
  },
];

export function ProblemStatements() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Problem Statements</h2>
          <p className="text-muted-foreground">
            Choose from a variety of innovative problem statements to work on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemStatements.map((problem) => (
            <Card key={problem.id} className="bg-card/50 border border-muted">
              <CardHeader>
                <CardTitle>{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
