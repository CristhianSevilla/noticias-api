import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import useNoticias from '../hooks/useNoticias'


const CATEGORIAS = [

    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
]

const Formulario = () => {

    const { categoria, handleChangeCategoria } = useNoticias()


    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                    label="Categoria"
                    onChange={handleChangeCategoria}
                    value={categoria}
                >
                    {
                        CATEGORIAS.map(categoria => (
                            <MenuItem
                                key={categoria.id}
                                value={categoria.id}
                            >
                                {categoria.name}
                            </MenuItem>
                        ))
                    }
                </Select>


                <Box sx={{ marginTop: 2 }}>
                    <Button
                        fullWidth
                        variant='contained'
                    // color='secondary'
                    >
                        Buscar Noticias
                    </Button>
                </Box>
            </FormControl>
        </form>
    )
}

export default Formulario