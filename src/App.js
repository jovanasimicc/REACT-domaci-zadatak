import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import {Footer} from "./components/footer";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Contact} from "./pages/contact/contact";
import {About} from "./pages/about/about";
import { Search } from "./pages/search/search";
import { ShopContextProvider } from './context/shop-context';

function App() {  
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
