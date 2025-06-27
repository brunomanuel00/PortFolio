import { useTheme } from "../context/ThemeContext"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {

    const event = new CustomEvent("themeToggle", { detail: { theme: theme === "dark" ? "light" : "dark" } })
    window.dispatchEvent(event)


    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      size="icon"
      onClick={toggleTheme}
      className=" w-10 h-10 bg-transparent hover:bg-transparent text-neutral-950 dark:text-white hover:text-white dark:hover:text-teal-400 transition-all duration-300 hover:scale-110 "
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}

