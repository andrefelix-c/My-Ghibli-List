import me from '../img/me.jpg' 

import styles from './Me.module.css'

function Me(){
    return(
        <div className={styles.container} id='me'>
            <div className={styles.image}>
                <img src={me} alt="minha foto" />
            </div>
            <div className={styles.text}>
                <h2>Just a little about me...</h2>
                <p>Hi, my name is <span>Francisco André</span>, I'm 21 years old and I'm doing a degree in <span>Computer Engineering</span> at IFCE (<span>Federal Institute of Education, Science and Technology</span>). I am passionate about technology and I hope one day I can help build a better, fairer and more equal society for all.</p>
            </div>
        </div>
    );
}

export default Me