import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './components/context/NoticiasProvider';



function App() {

  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3'>
            Buscador De Noticias
          </Typography>
        </header>

        <Grid
          container
          direction='row'
          justifyContent='center'
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Formulario />
          </Grid>
        </Grid>


      </Container>
    </NoticiasProvider>
  )
}

export default App
