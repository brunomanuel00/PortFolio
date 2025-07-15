import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useTranslation } from "react-i18next"
import Match from "../../assets/match.png"
import Gallery from "../../assets/gallery.png"
import Health from "../../assets/health.png"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  github: string
  demo: string
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const { t } = useTranslation()
  const projects: Project[] = [
    {
      title: t('projects.skillsMatch.title'),
      description: t('projects.skillsMatch.description'),
      tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Express", "Mongo DB"],
      image: Match,
      github: "https://github.com/brunomanuel00/MatchSkills",
      demo: "#",
    },
    {
      title: t('projects.healthCare.title'),
      description: t('projects.healthCare.description'),
      tags: ["React", "Vite", "JavaScript", "Material UI", "Styled Components", "Swiper"],
      image: Health,
      github: "https://github.com/brunomanuel00/Health-Medical",
      demo: "https://health-medical.vercel.app/",
    },
    {
      title: t('projects.photoGallery.title'),
      description: t('projects.photoGallery.description'),
      tags: ["React", "Vite", "TypeScript", "Material UI", "Styled Components"],
      image: Gallery,
      github: "https://github.com/brunomanuel00/Gallery",
      demo: "#",
    },

  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 4)

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
            {t('projects.title.part1')} <span className="text-[#1be9ec]">{t('projects.title.part2')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-[#1be9ec]/50 transition-all duration-300"
            >
              <div className="relative h-[350px] overflow-hidden">
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
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-[#1be9ec] dark:bg-[#1be9ec]/20 text-cyan-900 dark:text-[#1be9ec]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    disabled={project.github === "#"}
                    variant="outline"
                    size="sm"
                    className="border-[#1be9ec] text-cyan-900 dark:text-[#1be9ec] hover:bg-[#1be9ec]/20 "
                    onClick={() => {
                      window.open(project.github, "_blank");
                      triggerBackgroundAnimation
                    }
                    }
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t('projects.buttons.code')}
                  </Button>
                  <Button
                    disabled={project.demo === "#"}
                    size="sm"
                    className="bg-[#1be9ec] text-cyan-900 dark:text-[#1be9ec] hover:bg-[#1be9ec]/60 bg-[#1be9ec] dark:bg-[#1be9ec]/20 dark:hover:bg-[#1be9ec]/40"
                    onClick={() => {
                      window.open(project.demo, "_blank");
                      triggerBackgroundAnimation
                    }
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('projects.buttons.demo')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 4 &&
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
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t('projects.buttons.showLess') : t('projects.buttons.showMore')}
            </Button>
          </motion.div>}

      </div>
    </section>
  )
}
