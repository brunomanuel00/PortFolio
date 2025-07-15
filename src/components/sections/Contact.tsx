import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Contact() {

  const { t } = useTranslation()

  const triggerBackgroundAnimation = () => {
    const event = new CustomEvent("buttonClick", {
      detail: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    })
    window.dispatchEvent(event)
  }

  return (
    <section id="contact" className="py-20 bg-gray-700/25 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title.part1')} <span className="text-[#1be9ec]">{t('contact.title.part2')}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/70">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder={t('contact.form.placeholders.name')}
                    className="border-border focus:border-[#1be9ec] bg-card"
                    onClick={triggerBackgroundAnimation}
                  />
                </div>
                <div>
                  <Input
                    placeholder={t('contact.form.placeholders.email')}
                    type="email"
                    className="border-border focus:border-[#1be9ec] bg-card"
                    onClick={triggerBackgroundAnimation}
                  />
                </div>
              </div>
              <div>
                <Input
                  placeholder={t('contact.form.placeholders.subject')}
                  className="border-border focus:border-[#1be9ec] bg-card"
                  onClick={triggerBackgroundAnimation}
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.form.placeholders.message')}
                  rows={5}
                  className="border-border focus:border-[#1be9ec] bg-card resize-none"
                  onClick={triggerBackgroundAnimation}
                />
              </div>
              <Button
                className="w-full bg-[#1be9ec] text-gray-900 hover:bg-[#1be9ec]/80"
                onClick={triggerBackgroundAnimation}
              >
                {t('contact.form.placeholders.sent')}
              </Button>
            </form>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#1be9ec]/10 flex items-center justify-center mr-4">
                  <MapPin className="text-[#1be9ec]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.info.location')}</h4>
                  <p className="text-foreground/70">La Habana, Cuba</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#1be9ec]/10 flex items-center justify-center mr-4">
                  <Mail className="text-[#1be9ec]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.info.mail')}</h4>
                  <p className="text-foreground/70">brunomamuel00@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#1be9ec]/10 flex items-center justify-center mr-4">
                  <Phone className="text-[#1be9ec]" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.info.phone')}</h4>
                  <p className="text-foreground/70">+5354866048</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card border border-border rounded-xl">
              <h4 className="font-semibold mb-4">{t('contact.info.schedule.workTime')}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('contact.info.schedule.monToFri')}</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('contact.info.schedule.saturday')}</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('contact.info.schedule.sunday')}</span>
                  <span>{t('contact.info.schedule.sundayTime')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

