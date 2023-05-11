import { createContext, useState } from "react";

const DEFAULT_CONTEXT = {
    theme: "WHITE",
    lang: "en-us"
}

export const Context = createContext(DEFAULT_CONTEXT)

export const ContextProvider = (props: any) => {
    const { children } = props

    return (children)
}

const useContext = () => {
    const [lang, setLang] = useState()
}

export default useContext