import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Noticia = ({ noticia }) => {

    const { original_language, overview, poster_path, title, release_date, id } = noticia
    

    return (
        <Grid item sm={4} lg={3} >
            <Card>
                {poster_path && (
                    <CardMedia
                        component='img'
                        alt={`Imagen de la pelicula ${title}`}
                        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        height={'400'}
                    />
                )}

                <CardContent>
                    <Typography
                        variant='body1'
                        color='error'
                    >
                        {`Estreno: ${release_date}`}
                    </Typography>
                    <Typography
                        variant='h6'
                        component='div'
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Card>

        </Grid>
    )
}

export default Noticia