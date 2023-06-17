import { useContext } from "react";
import NoticiasContext from "../components/context/NoticiasProvider";

const useNoticias = () => {
    return useContext(NoticiasContext)
}

export default useNoticias