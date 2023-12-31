import { ThemeProvider, Container, Grid, Typography, CssBaseline, GlobalStyles, createTheme } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoPeliculas from './components/ListadoPeliculas';
import { PeliculasProvider } from './context/PeliculasProvider';


function App() {

  const theme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: 'white', // Color del borde del fieldset
              transition: 'border-color 0.3s', // Transición suave del color del borde
            },
            '& svg':
            {
              color: 'white',
            },
          },
        },
      },
    },
  });


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {<PeliculasProvider>
          <Container>
            <header>
              <Typography textTransform={'capitalize'} align='center' marginY={5} component="h1" variant='h3' color='primary' >
                Buscar películas
              </Typography>
            </header>

            <Grid
              container
              direction='row'
              justifyContent='center'
              marginY={5}
            >
              <Grid
                item
                xs={12}
                sm={10}
                md={6}
              >
                <Formulario />
              </Grid>
            </Grid>

            <ListadoPeliculas/>

          </Container>
        </PeliculasProvider>}
        <GlobalStyles styles={{
          'body': {
            backgroundColor: '#141a32',
          },
        }} />
      </ThemeProvider>

    </>
  )
}

export default App
