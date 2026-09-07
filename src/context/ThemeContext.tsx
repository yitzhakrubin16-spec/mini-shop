import React, { createContext, useState } from "react";

type ThemeContextType = {
    theme: "light" | "dark"
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme:"light",
    toggleTheme: () => {}
})

export function ThemeProvider({children}:{children: React.ReactNode}) {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    const toggleTheme = () => {
        setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider 
        value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}