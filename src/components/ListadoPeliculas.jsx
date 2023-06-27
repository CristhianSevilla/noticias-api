import Grid from "@mui/material/Grid"
import usePeliculas from '../hooks/usePeliculas'
import Pelicula from "./Pelicula"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'

const ListadoPeliculas = () => {

    const { peliculas, totalPeliculas, handleCHangePagina, pagina } = usePeliculas()

    const totalPaginas = totalPeliculas => {
        const paginas = Math.ceil(totalPeliculas / 20)
        return paginas
    }

    const tPaginas = totalPaginas(totalPeliculas)

    return (
        <>
            <Grid
                container
                spacing={3}
                alignItems="stretch"
            >
                {
                    peliculas.map(pelicula => (
                        <Pelicula
                            key={pelicula.id}
                            pelicula={pelicula}
                        />
                    ))
                }
            </Grid>

            <Typography textAlign={'center'} color={'white'} marginTop={3}>
                Páginas
            </Typography>

            <Stack
                sx={{ marginTop: 3, marginBottom: 8 }}
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}

            >
                <Pagination
                    count={tPaginas}
                    color="primary"
                    onChange={handleCHangePagina}
                    page={pagina}
                    siblingCount={0}
                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: 'white',
                        },
                    }}
                />
            </Stack>
        </>
    )
}

export default ListadoPeliculas