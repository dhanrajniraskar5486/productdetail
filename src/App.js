import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import DetailsSection from './components/DetailSection';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <ChakraProvider>
      <Navbar/>
      <ProductSection/>
      <DetailsSection/>
      <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
