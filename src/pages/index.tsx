import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}
