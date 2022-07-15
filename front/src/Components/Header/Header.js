import {ContainerHader, Image} from "./styled"
import Logo from "../../Assets/img/Logo.png"
import DehazeIcon from '@mui/icons-material/Dehaze';

export const Header = () => {
    return (
        <ContainerHader>
             <Image src = {Logo} alt="Símbolo que indica o ato de voltar"/>
             <a href="https://github.com/Bentojessica/Ambulnz-Case-Fullstack"  target="_blank"> 
             <DehazeIcon style={{marginBottom: '20px', height:'70px', paddingRight:"50px" , cursor: 'pointer'}}/>
            </a>
             
        </ContainerHader>
    )
 }