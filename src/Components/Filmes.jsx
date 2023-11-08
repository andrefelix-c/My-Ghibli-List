import Cards from "./Cards";
import { useState } from 'react'
import styles from './Filmes.module.css'
import { BiSearchAlt } from 'react-icons/bi'

function Filmes(){

    const [listas, setListas] = useState([]);

    const [filter, setFilter] = useState('');

    const url = "https://ghibliapi.vercel.com/films" 
    
    fetch(url)
    .then(response => response.json())
    .then(json => setListas(json))
    .then(json => console.log(json))


    return(
        <div id="movies">
            <div className={styles.input_container}>
                <BiSearchAlt className={styles.input_icon}/>
                <input placeholder="Type the title..." type="text" onChange={(e) => setFilter(e.target.value)}/>
            </div>
            <div className={styles.container}>
                {listas.filter(lista => lista.title.toLowerCase().includes(filter.toLowerCase())).map( lista => (
                    <Cards all={lista}/>
                ))}
            </div>
        </div>
    );
}

export default Filmes
