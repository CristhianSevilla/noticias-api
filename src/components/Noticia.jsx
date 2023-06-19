import Box from '@mui/material/Box';
import * as React from 'react';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InformacionPelicula from './InformacionPelicula';
import useNoticias from '../hooks/useNoticias';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Noticia = ({ noticia }) => {

    const { poster_path, title, release_date } = noticia
    const {formatearFecha} = useNoticias()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={6} sm={4} lg={2} >
                <Button onClick={handleOpen} sx={{ padding: 0 }}>
                    <Card sx={{ boxShadow: 'none', borderRadius: '0' }}>

                        <CardActions sx={{ padding: '0', display: 'block' }}>
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
                        </CardActions>
                    </Card>
                </Button>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <InformacionPelicula
                        noticia={noticia}
                    />
                </Box>
            </Modal>
        </ >
    )
}

export default Noticia