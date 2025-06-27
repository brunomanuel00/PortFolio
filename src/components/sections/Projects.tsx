import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Diseño de E-commerce",
      description: "Plataforma de comercio electrónico con diseño moderno y experiencia de usuario optimizada.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://placehold.co/600x400",
      github: "#",
      demo: "#",
    },
    {
      title: "App de Gestión de Tareas",
      description: "Aplicación para gestionar tareas y proyectos con funcionalidades avanzadas.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "https://placehold.co/600x400",
      github: "#",
      demo: "#",
    },
    {
      title: "Dashboard Analítico",
      description: "Panel de control para visualizar y analizar datos empresariales en tiempo real.",
      tags: ["Vue.js", "D3.js", "Node.js"],
      image: "https://placehold.co/600x400",
      github: "#",
      demo: "#",
    },
    {
      title: "Sitio Web Corporativo",
      description: "Sitio web corporativo con diseño elegante y funcionalidades personalizadas.",
      tags: ["WordPress", "PHP", "JavaScript"],
      image: "https://placehold.co/600x400",
      github: "#",
      demo: "#",
    },
  ]

  const triggerBackgroundAnimation = () => {
    const event = new CustomEvent("buttonClick", {
      detail: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    })
    window.dispatchEvent(event)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-[#1be9ec]">Proyectos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            Una selección de mis trabajos recientes en desarrollo web y diseño.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-[#1be9ec]/50 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-[#1be9ec]/10 text-[#1be9ec]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#1be9ec] text-[#1be9ec] hover:bg-[#1be9ec]/10"
                    onClick={triggerBackgroundAnimation}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#1be9ec] text-gray-900 hover:bg-[#1be9ec]/80"
                    onClick={triggerBackgroundAnimation}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-[#1be9ec] text-[#1be9ec] hover:bg-[#1be9ec]/10"
            onClick={triggerBackgroundAnimation}
          >
            Ver más proyectos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

