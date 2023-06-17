import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    //Consumir API
    useEffect(() => {

        try {
            const consultarAPI = async () => {
                const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`

                const { data } = await axios(url)

                setNoticias(data.articles)

            }

            consultarAPI()

        } catch (error) {
            console.log(error);
        }


    }, [categoria])
    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria

            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext