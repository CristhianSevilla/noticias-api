import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import useNoticias from '../hooks/useNoticias'


const CATEGORIAS = [
    { id: 28, name: "Action", value: "Acción" },
    { id: 12, name: "Adventure", value: "Aventura" },
    { id: 16, name: "Animation", value: "Animación" },
    { id: 35, name: "Comedy", value: "Comedia" },
    { id: 80, name: "Crime", value: "Crimen" },
    { id: 99, name: "Documentary", value: "Documental" },
    { id: 18, name: "Drama", value: "Drama" },
    { id: 10751, name: "Family", value: "Familia" },
    { id: 14, name: "Fantasy", value: "Fantasía" },
    { id: 36, name: "History", value: "Historia" },
    { id: 27, name: "Horror", value: "Horror" },
    { id: 10402, name: "Music", value: "Música" },
    { id: 9648, name: "Mystery", value: "Misterio" },
    { id: 10749, name: "Romance", value: "Romance" },
    { id: 878, name: "Science Fiction", value: "Ciencia ficción" },
    { id: 10770, name: "TV Movie", value: "Película de televisión" },
    { id: 53, name: "Thriller", value: "Thriller" },
    { id: 10752, name: "War", value: "Guerra" },
    { id: 37, name: "Western", value: "Occidental" }
]

const Formulario = () => {

    const { categoria, handleChangeCategoria } = useNoticias()

    return (
        <form>
            <FormControl fullWidth >
                <InputLabel sx={{ color: 'white' }} >
                    Genéro
                </InputLabel>
                <Select
                    label="Categoria"
                    onChange={handleChangeCategoria}
                    value={categoria}
                    sx={{ color: 'white' }}                >
                    {
                        CATEGORIAS.map(categoria => (
                            <MenuItem
                                key={categoria.id}
                                value={categoria.id}
                            >
                                {categoria.value}
                            </MenuItem>
                        ))
                    }
                </Select>

                {/* 
                <Box sx={{ marginTop: 2 }}>
                    <Button
                        fullWidth
                        variant='contained'
                    // color='secondary'
                    >
                        Buscar Noticias
                    </Button>
                </Box> */}
            </FormControl>

        </form>
    )
}

export default Formulario