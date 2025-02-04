import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface Theme {
  colors: {
    primary: string
    secondary: string
    backgroundColor: string
    textColor: string
    accent: string
    poor: string
    fair: string
    good: string
    veryGood: string
    excellent: string
    
  }
  fonts: {
    body: string
    heading: string
  }
  scoreRanges: {
    poor: [number, number]
    fair: [number, number]
    good: [number, number]
    veryGood: [number, number]
    excellent: [number, number]
  }
}

const defaultTheme: Theme = {
  colors: {
    primary: "#3b82f6",
    secondary: "#64748b",
    backgroundColor: '#F1F5F9',
    textColor: '#111827',
    accent: "#f59e0b",
    poor: "#ef4444",
    fair: "#f59e0b",
    good: "#22c55e",
    veryGood: "#3b82f6",
    excellent: "#8b5cf6",
  },
  fonts: {
    body: "sans-serif",
    heading: "sans-serif",
  },
  scoreRanges: {
    poor: [300, 579],
    fair: [580, 669],
    good: [670, 739],
    veryGood: [740, 799],
    excellent: [800, 850],
  },
}

const ThemeContext = createContext<Theme>(defaultTheme)

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
  children: ReactNode
  theme?: Partial<Theme>
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const mergedTheme = { ...defaultTheme, ...theme }
  const [ currentTheme, setCurrentTheme]= useState<Theme>(mergedTheme)

  const setTheme = (newTheme: Theme) => setCurrentTheme(newTheme)

  useEffect(() => {
    //@ts-ignore
    window.setTheme = setTheme;
  }, [])

  return <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>
}



