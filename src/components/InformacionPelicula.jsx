import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useNoticias from '../hooks/useNoticias';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CATEGORIAS from '../Data'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const InformacionPelicula = ({ noticia }) => {

    console.log(noticia);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { formatearFecha } = useNoticias()

    const { backdrop_path, vote_average, vote_count, overview, title, release_date, genre_ids } = noticia

    const categorias = CATEGORIAS.reduce((resultado, categoria) => {
        if (genre_ids.includes(categoria.id)) {
            resultado = [...resultado, categoria.value];
        }
        return resultado;
    }, []);


    return (
        <>
            <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                    title={title}
                    subheader={`${formatearFecha(release_date)}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt="Paella dish"
                />
                <CardContent>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginBottom:  '.5rem' }}>
                        <Typography variant="body2" sx={{
                            span: {
                                fontWeight: 'bold',
                                textTransform: 'uppercase'
                            }
                        }}>
                            <span>Categorias:</span>
                            {` ${categorias.join(', ')}`}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <FavoriteIcon sx={{ color: '#d60303', marginRight: 1 }} />
                        <Typography variant="body2" color="error">
                            {`${vote_average} de ${vote_count} votos`}
                        </Typography>
                    </div>
               
                </CardContent>
                <CardActions disableSpacing>
                    <Typography variant="body2" color="text.secondary" textTransform={'uppercase'} fontWeight={'bold'}>
                        Mostrar resúmen
                    </Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {overview}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

export default InformacionPelicula