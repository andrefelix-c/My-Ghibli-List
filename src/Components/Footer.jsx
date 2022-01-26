import styles from './Footer.module.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {RiGhostSmileFill} from 'react-icons/ri'

function Footer(){
    return(
        <div id='contatos' className={styles.container}>
            <hr/>
            <div className={styles.contatos}>
                <a href='https://www.linkedin.com/in/francisco-andr%C3%A9-f%C3%A9lix-404b661a4/' target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon}/>LinkedIn</a>
                <a href='https://github.com/andrefelix-c' target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon}/>GitHub</a>
            </div>
            <div className={styles.rodape}>
                <p>Desenvolvido por <span>Francisco André</span><RiGhostSmileFill className={styles.icon2}/></p>
            </div>
        </div>
    );
}

export default Footer