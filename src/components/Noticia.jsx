import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Noticia = ({ noticia }) => {

    const { original_language, overview, poster_path, title, release_date, id } = noticia
    
    function formatearFecha(fecha) {
        const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      
        return fechaFormateada;
      }

    return (
        <Grid item xs={6} sm={4} lg={2} >
            <Card sx={{  boxShadow: 'none', borderRadius: '0' }}>
                {poster_path && (
                    <CardMedia
                        component='img'
                        alt={`Imagen de la pelicula ${title}`}
                        image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    />
                )}
       
                <CardContent sx={{ backgroundColor: '#141a32', color: 'white' }}>
                    <Typography
                        variant='body2'
                        color='error'
                        fontWeight={700}
                    >
                        {`${formatearFecha(release_date)}`}
                    </Typography>
                    <Typography
                        variant='body1'
                        component='div'
                        fontWeight={700}
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Card>

        </Grid>
    )
}

export default Noticia