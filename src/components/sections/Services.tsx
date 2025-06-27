import { motion } from "framer-motion"
import {
  Code,
  Database,
  Package,
  MessageSquare,
  CheckSquare
} from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: "Frontend Development",
      description: (
        <>
          React (Vite), TypeScript, Tailwind CSS, Shadcn/UI<br />
          Building responsive, accessible interfaces with modern web frameworks.
        </>
      ),
    },
    {
      icon: <Database className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: "Backend Development",
      description: (
        <>
          Express.js, MongoDB, Mongoose, JWT<br />
          Designing RESTful APIs and secure authentication for data-driven applications.
        </>
      ),
    },
    {
      icon: <Package className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: "Database Management",
      description: (
        <>
          MongoDB, Mongoose<br />
          Modeling schemas and optimizing queries for efficient data storage and retrieval.
        </>
      ),
    },
    {
      icon: <MessageSquare className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: "Real-Time Communication",
      description: (
        <>
          Socket.IO<br />
          Implementing live chat features to enable instant user interactions.
        </>
      ),
    },
    {
      icon: <CheckSquare className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: "Testing & State Management",
      description: (
        <>
          Playwright, Jest, Redux, Context<br />
          Writing unit and end-to-end tests; managing global state for predictable UI behavior.
        </>
      ),
    },
  ]

  const triggerBackgroundAnimation = () => {
    const event = new CustomEvent("buttonClick", {
      detail: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
    })
    window.dispatchEvent(event)
  }

  return (
    <section id="services" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#1be9ec]">Core Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Expertise across the full development stack, tailored to your project needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-[#1be9ec]/50 transition-all duration-300"
              onClick={triggerBackgroundAnimation}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
