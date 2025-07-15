import type React from "react"
import { ThemeToggle } from "../ThemeToggle"
import { LanguageToggle } from "../LanguageToggle"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t('layout.navItems.home'), href: "#hero" },
    { name: t('layout.navItems.services'), href: "#services" },
    { name: t('layout.navItems.projects'), href: "#projects" },
    { name: t('layout.navItems.contact'), href: "#contact" },
  ]

  const triggerBackgroundAnimation = () => {
    const event = new CustomEvent("buttonClick", {
      detail: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    })
    window.dispatchEvent(event)
  }

  return (
    <div className="min-h-screen">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-700/25 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#1be9ec]"
          >
            {t('layout.brand.part1')}<span className="text-foreground">{t('layout.brand.part2')}</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground hover:text-white dark:hover:text-teal-400 transition-colors"
                onClick={triggerBackgroundAnimation}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />

            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-md"
            >

              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-[#1be9ec] transition-colors py-2"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      triggerBackgroundAnimation()
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <LanguageToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">{children}</main>

      <footer className="bg-background/80 backdrop-blur-md py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/70">
            {t("layout.footer.copyright", { year })}
          </p>
        </div>
      </footer>
    </div>
  )
}

