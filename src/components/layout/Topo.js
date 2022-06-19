import styles from './Navbar.module.css';
import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'

function Topo(){
    return(
        <>
            <div class={styles.topo}>
                <div>Need</div>
                
                {/* <div>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div> */}
            </div>
            
        </>
    )
}
export default Topo