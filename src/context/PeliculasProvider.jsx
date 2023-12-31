import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const PeliculasContext = createContext()

const PeliculasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState(12)
    const [peliculas, setPeliculas] = useState([])
    const [totalPeliculas, setTotalPeliculas] = useState(1)
    const [pagina, setPagina] = useState(1)

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    //Consumir API por categoria
    useEffect(() => {
        const consultarAPI = async () => {

            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${categoria}&language=es`;

            const { data } = await axios(url)

            setTotalPeliculas(data.total_pages);
            setPeliculas(data.results)
            setPagina(1)
        }

        consultarAPI()

    }, [categoria])

    //Consumir API por pagina
    useEffect(() => {
        const consultarAPI = async () => {

            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${categoria}&language=es&page=${pagina}`;

            const { data } = await axios(url)

            setTotalPeliculas(data.total_pages);
            setPeliculas(data.results)
        }

        consultarAPI()

    }, [pagina])

    const handleCHangePagina = (e, valor) => {
        setPagina(valor);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function formatearFecha(fecha) {
        const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });

        return fechaFormateada;
    }

    return (
        <PeliculasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                peliculas,
                totalPeliculas,
                handleCHangePagina,
                pagina,
                formatearFecha
            }}
        >
            {children}
        </PeliculasContext.Provider>
    )
}

export {
    PeliculasProvider
}

export default PeliculasContext