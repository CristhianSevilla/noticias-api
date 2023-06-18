import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from '../hooks/useNoticias'
import Noticia from "./Noticia"

const ListadoNoticias = () => {

    const { noticias } = useNoticias()

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant="h3"
                component={'h2'}
            >
                Resultados
            </Typography>

            <Grid
                container
                spacing={4}
                height={'250'}
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

        </>
    )
}

export default ListadoNoticias