import { ContainerFooter } from "./styled"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {

    return (
        <ContainerFooter>
           <h6>Feito por Jéssica Bento </h6>

           <a href="https://github.com/Bentojessica"  target="_blank">
           <GitHubIcon style={{ marginLeft: "60rem", cursor: 'pointer'}}/>
           </a>
           <a href="https://www.instagram.com/j_bm96"  target="_blank">
           <InstagramIcon style={{ marginLeft: "10px", cursor: 'pointer'}}/>
           </a>
           <a href="https://www.linkedin.com/in/jessica-bento/"  target="_blank">
           <LinkedInIcon style={{ marginLeft: "10px", cursor: 'pointer'}}/>
           </a>
           <a href="https://api.whatsapp.com/send?phone=55102155125&text=Pizza%20Point"  target="_blank"> 
             <WhatsAppIcon style={{ marginLeft: "10px", cursor: 'pointer'}}/>
            </a>
        </ContainerFooter>
    )
 }