import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the Generative AI Hackathon?",
      answer:
        "The Generative AI Hackathon is an event where participants collaborate to build innovative projects using Generative AI technologies. It's a great opportunity to learn, network, and showcase your skills.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone with an interest in Generative AI is welcome! Whether you're a beginner, student, professional, or enthusiast, you can join and contribute.",
    },
    {
      question: "Do I need prior experience with AI?",
      answer:
        "No prior experience is required! We will provide resources, mentors, and workshops to help you get started with Generative AI.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and any other tools you need for development. If the event is in-person, you might also want to bring snacks and a water bottle.",
    },
    {
      question: "Are there any prizes?",
      answer:
        "Yes! We have exciting prizes for the top teams, including cash rewards, tech gadgets, and opportunities to showcase your project to industry leaders.",
    },
    {
      question: "How do I register?",
      answer:
        "You can register by clicking the 'Register' button on the homepage and filling out the registration form. Make sure to sign up before the deadline!",
    },
    {
      question: "Can I participate as part of a team?",
      answer:
        "Absolutely! You can form a team with your friends or join a team during the event. Teams typically consist of 2-5 members.",
    },
    {
      question: "Will there be mentors available?",
      answer:
        "Yes, experienced mentors will be available throughout the event to guide you and answer your questions.",
    },
    {
      question: "What technologies can I use?",
      answer:
        "You can use any technology or framework you like, but we encourage participants to explore Generative AI tools and platforms such as OpenAI, Hugging Face, or Stable Diffusion.",
    },
    {
      question: "How will the projects be judged?",
      answer:
        "Projects will be judged based on creativity, technical implementation, impact, and presentation. The judging criteria will be shared in detail during the event.",
    },
  ];

  return (
    <section className="faq-section py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
