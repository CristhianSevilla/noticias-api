import Grid from "@mui/material/Grid"
import useNoticias from '../hooks/useNoticias'
import Noticia from "./Noticia"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

    const { noticias, totalPeliculas, handleCHangePagina, pagina } = useNoticias()

    const totalPaginas = totalPeliculas => {
        const paginas = Math.ceil(totalPeliculas / 20)
        console.log(paginas);
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
                    noticias.map(noticia => (
                        <Noticia
                            key={noticia.id}
                            noticia={noticia}
                        />
                    ))
                }
            </Grid>

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

export default ListadoNoticias