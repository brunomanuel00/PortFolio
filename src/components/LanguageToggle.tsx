import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";

export function LanguageToggle() {
    const { t, i18n } = useTranslation()


    useEffect(() => {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage && i18n.language !== savedLanguage) {
            i18n.changeLanguage(savedLanguage)
        }
    }, [i18n])

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('language', lng)

    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button title={t('layout.language.title')} variant="ghost" className="hover:bg-inherit " size="icon">
                    <motion.div transition={{ duration: 0.2 }}>
                        <Languages className="h-5 w-5 text-cyan-950 hover:text-white dark:hover:text-teal-400 dark:text-white transition-all duration-300 hover:scale-110" />
                        <span className="sr-only">title={t('language.title')}</span>
                    </motion.div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                    <span className="text-xl">🇺🇸</span>
                    {t("layout.language.en")} {i18n.language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("es")}>
                    <span className="text-xl">🇪🇸</span>
                    {t("layout.language.es")} {i18n.language === "es" && "✓"}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}
