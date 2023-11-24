import './App.css';
import Header from './components/Header';
import CarDemo from './components/CarDemo';
import CarList from "./components/CarList";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main>
      <Header/>
      <CarDemo/>
      <CarList/>
      <Footer/>
    </main>
  )
}

export default App
