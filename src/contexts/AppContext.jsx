import { createContext, useState, useEffect, Children } from "react";
import { getApiData } from "../services/apiServices"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const savedLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(savedLanguage ?? 'br')
    const [languages, setLanguages] = useState()
    const [loading, setLoanding] = useState(true)

    useEffect(() => {
        const fetchLanguage = async () => {
            try{
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            } catch (e) {
                console.error(e)
            } finally {
                setLoanding(false)
            }
        }
        fetchLanguage()
    }, []) // usado chave vazia para rodar a função somente uma vez

    useEffect(() => {
        localStorage.setItem('lang', language)
    }, [language]) // usado chave preenchida para que toda vez que a função do language for clicada rodar e salve no webstorage

    return (
        <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
            {children}
        </AppContext.Provider>
    )
}