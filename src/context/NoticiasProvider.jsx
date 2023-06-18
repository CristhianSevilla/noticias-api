import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState(12)
    const [noticias, setNoticias] = useState([])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    //Consumir API
    useEffect(() => {

        const consultarAPI = async () => {

            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${categoria}&language=es`;

            // const url = 'https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&sort_by=release_date.desc&with_genres=${categoria}&page=1&language=es'


            const { data } = await axios(url)

            setNoticias(data.results)

        }

        consultarAPI()

    }, [categoria])

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias

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