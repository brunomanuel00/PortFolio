import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()
  const triggerBackgroundAnimation = () => {
    const event = new CustomEvent("buttonClick", {
      detail: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    })
    window.dispatchEvent(event)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-block p-2 bg-[#1be9ec]/10 rounded-full mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1be9ec] to-[#1be9ec]/60 flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl dark:text-white text-black md:text-6xl font-bold mb-4"
        >
          {t('hero.presentation')} <span className="text-[#1be9ec]">Bruno Coello</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-medium dark:text-white text-black mb-6"
        >
          {t('hero.profession')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl dark:text-white text-black mb-8 text-lg"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="bg-[#1be9ec] text-gray-900 hover:bg-[#1be9ec]/80 transition-all duration-300"
              onClick={triggerBackgroundAnimation}
            >

              {t('hero.goTo.projects')}
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="border-[#1be9ec] text-slate-700 dark:text-slate-200 hover:bg-[#1be9ec]/10 transition-all duration-300"
              onClick={triggerBackgroundAnimation}
            >
              {t('hero.goTo.contact')}
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 mb-16"
        >
          <a
            href="https://github.com/brunomanuel00"
            title="Github"
            target="_Blank"
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-[#1be9ec] hover:text-[#1be9ec] transition-all duration-300"
            onClick={triggerBackgroundAnimation}
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-coello"
            target="_Blank"
            title="Linkedin"
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-[#1be9ec] hover:text-[#1be9ec] transition-all duration-300"
            onClick={triggerBackgroundAnimation}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:brunomamuel00@gmail.com"
            title="Gmail"
            className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-[#1be9ec] hover:text-[#1be9ec] transition-all duration-300"
            onClick={triggerBackgroundAnimation}
          >
            <Mail size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: [5, -5, 0] }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-14"
        >
          <a
            href="#services"
            className="flex flex-col items-center dark:text-white text-black hover:text-[#1be9ec] dark:hover:text-[#1be9ec] transition-all"
            onClick={triggerBackgroundAnimation}
          >
            <span className="mb-2 text-sm">{t('hero.scroll')}</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

