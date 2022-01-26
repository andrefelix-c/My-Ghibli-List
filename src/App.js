import 'bootstrap/dist/css/bootstrap.min.css';
import Filmes from './Components/Filmes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Me from './Components/Me';


function App() {

  return (
    <div>
      <Header/>
      <Filmes />
      <Me/>
      <Footer/>
    </div>
  );
}

export default App;
