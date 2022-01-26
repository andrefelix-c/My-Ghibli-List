import styles from './About.module.css'
import { Card, Button } from 'react-bootstrap'

function About(props){

    const filme = props.all

    const status = props.status

    function click(){
        status("0")
    }

    return(
        <Card border="dark" className={styles.container}>
            <img src={filme.image} alt={filme.title} className={styles.container_img}/>
            <div className={styles.texto}>
                <h3>{filme.title}</h3>
                <p>{filme.description}</p>
                <ul>
                    <li>Titulo oficial: <span>{filme.original_title}</span></li>
                    <li>Titulo romantizado: <span>{filme.original_title_romanised}</span></li>
                    <li>Diretor: <span>{filme.director}</span></li>
                    <li>Produtor: <span>{filme.producer}</span></li>
                    <li>Lançamento: <span>{filme.release_date}</span></li>
                    <li>Duração: <span>{filme.running_time}</span></li>
                    <li>Score: <span>{filme.rt_score}</span></li>
                </ul>
                <Button variant="outline-dark" className={styles.button} onClick={click}>Fechar</Button>
            </div>
        </Card>
    );
}

export default About