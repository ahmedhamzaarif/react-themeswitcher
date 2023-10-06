import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'

const App = () => {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl.classList.remove("light", "dark")
    htmlEl.classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* Theme Btn */}
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/* Card */}
                <Card/>
            </div>
        </div>
    </div>
    </ThemeProvider>

  )
}

export default App