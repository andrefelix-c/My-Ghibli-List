import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import { BiMoviePlay } from 'react-icons/bi'
import { BsPhone, BsFillPersonFill } from 'react-icons/bs'
import { MdOutlineLocalMovies} from 'react-icons/md'
import logo from '../img/Studio_Ghibli_logo.png'
import styles from './Header.module.css'

function Header(){
    return(
        <Container fluid >
            <Navbar bg="white" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#"><MdOutlineLocalMovies className={styles.icon}/>My Ghibli List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto" className="justify-content-end">
                            <Nav.Link href="#movies"><BiMoviePlay className={styles.icon}/>Movies</Nav.Link>
                            <Nav.Link href="#me"><BsFillPersonFill className={styles.icon}/>About Me</Nav.Link>
                            <Nav.Link href="#contatos"><BsPhone className={styles.icon}/>Contacts</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={styles.logo_container}>
                <img src={logo} alt="Logo Studio Ghibli" className="justify-contend-end"/>
            </div>
        </Container>
    );
}

export default Header