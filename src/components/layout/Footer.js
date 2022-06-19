import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
    return(
       
        <footer class={styles.ContainerFooter}>
             <div class='clear'>
            
            </div>
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedin/>
                <h4>© Copyright 2022 - Need Projects. All rights reserved.</h4>


        </footer>
    )
}
export default Footer

