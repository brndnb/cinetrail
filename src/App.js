
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div>
      <ThemeContextProvider>
       <Header />
       <Homepage />
       <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
