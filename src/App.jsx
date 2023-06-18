import { Container, Grid, Typography, CssBaseline, GlobalStyles, createTheme, ThemeProvider } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import { NoticiasProvider } from './context/NoticiasProvider';



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
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {<NoticiasProvider>
          <Container>
            <header>
              <Typography textTransform={'capitalize'} align='center' marginY={5} component="h1" variant='h3' color='primary' >
                Buscar peliculas
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

            <ListadoNoticias />


          </Container>
        </NoticiasProvider>}
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
