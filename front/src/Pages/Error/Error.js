import { useNavigate } from "react-router-dom"
import {goToFeed} from "../../Router/Coordinator"
import {ContainerError} from "./styled"

export const Error = () => {
    const navegate = useNavigate()
    return <ContainerError>
        <h1>Pagina não encontrada</h1>
        <button onClick={() => goToFeed(navegate)}>Ir para a Home</button>
    </ContainerError>
}