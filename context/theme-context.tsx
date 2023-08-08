'use client'
 
import React, { ChangeEvent, ReactNode, createContext, useContext, useState } from 'react'
 
const GlobalContext = createContext({
    theme:'',
    setTheme:(e:any) => e.target.value
})



type Children = {
    children:ReactNode
}
 
export function ThemeSwitch({children}:Children) {
  const [theme, setTheme] = useState('')
 
  return (
    <GlobalContext.Provider value={{ theme,setTheme }}>
        {children}
    </GlobalContext.Provider>
  )
}
 


export const useGlobalContext = () => useContext(GlobalContext)