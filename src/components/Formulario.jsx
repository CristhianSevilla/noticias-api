import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import usePeliculas from '../hooks/usePeliculas'
import CATEGORIAS from '../Data'

const Formulario = () => {

    const { categoria, handleChangeCategoria } = usePeliculas()

    return (
        <form>
            <FormControl fullWidth >
                <InputLabel sx={{ color: 'white' }} >
                    Genéro
                </InputLabel>
                <Select
                    label="Categoria"
                    onChange={handleChangeCategoria}
                    value={categoria}
                    sx={{ color: 'white' }}                >
                    {
                        CATEGORIAS.map(categoria => (
                            <MenuItem
                                key={categoria.id}
                                value={categoria.id}
                            >
                                {categoria.value}
                            </MenuItem>
                        ))
                    }
                </Select>

            </FormControl>

        </form>
    )
}

export default Formulario