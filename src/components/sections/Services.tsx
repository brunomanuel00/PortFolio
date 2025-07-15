import { motion } from "framer-motion"
import {
  Code,
  Database,
  Package,
  Laptop2,
  MessageSquare
} from "lucide-react"
import { useTranslation } from "react-i18next"


export default function Services() {
  const { t } = useTranslation()
  const services = [
    {
      icon: <Laptop2 className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: t('service.frontend.title'),
      description: (
        <>
          {t('service.frontend.descriptionPart1')}<br />
          {t('service.frontend.descriptionPart2')}
        </>
      ),
    },
    {
      icon: <Code className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: t('service.backend.title'),
      description: (
        <>
          {t('service.backend.descriptionPart1')}<br />
          {t('service.backend.descriptionPart2')}
        </>
      ),
    },
    {
      icon: <Database className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: t('service.dataBase.title'),
      description: (
        <>
          {t('service.dataBase.descriptionPart1')}<br />
          {t('service.dataBase.descriptionPart2')}
        </>
      ),
    },
    {
      icon: <MessageSquare className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: t('service.chat.title'),
      description: (
        <>
          {t('service.chat.descriptionPart1')}<br />
          {t('service.chat.descriptionPart2')}
        </>
      ),
    },
    {
      icon: <Package className="w-10 h-10 mb-4 text-[#1be9ec]" />,
      title: t('service.test.title'),
      description: (
        <>
          {t('service.test.descriptionPart1')}<br />
          {t('service.test.descriptionPart2')}
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
    <section id="services" className="py-20 bg-gray-700/25 backdrop-blur-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('service.title.part1')}<span className="text-[#1be9ec]">{t('service.title.part2')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            {t('service.paragraph')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-card border border-border  w-full  sm:w-1/2 md:w-56 lg:w-5/6 max-w-sm rounded-xl p-6 text-center hover:border-[#1be9ec]/50 transition-all duration-300"
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
