import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from '../hooks/useNoticias'
import Noticia from "./Noticia"

const ListadoNoticias = () => {

    const { noticias } = useNoticias()

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
        </>
    )
}

export default ListadoNoticias