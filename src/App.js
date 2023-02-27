
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ThemeContextProvider from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
      <ThemeContextProvider>
       <Header />
       
       <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/moviedetails/:movieId" element= {<MovieDetails />} />
       </Routes>
       
       <Footer />
       
      </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
