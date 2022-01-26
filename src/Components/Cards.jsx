import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import About from './About';
import styles from './Cards.module.css'

function Cards(props){

    const filme = props.all

    const [status, setStatus] = useState("0")

    function click(){
        setStatus("1")
    }

    return(

        <div className={styles.container}>
            <Card border="secondary" className={styles.card_size}>
                <Card.Img variant="top" src={filme.movie_banner}/>
                <Card.Body>
                    <Card.Title className={styles.text_center}>{filme.title}</Card.Title>
                </Card.Body>
                <Button variant="outline-dark" className={styles.button} onClick={click}>Saiba Mais</Button>
            </Card>
            {status == 1 && <About all={filme} status={setStatus}/>}
        </div>
    
    );
}

export default Cards