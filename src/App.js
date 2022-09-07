import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Info from './Info/Info';
import Welcome from "./welcome/Welcome"
import Product from './Product/Product';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer'

function App() {

  


  return (
   <div>
   
    <Navbar/>
    <Info/>
    <Welcome/>
    <Product />
    <Profile/>
    <Footer />
   </div>
  );
}

export default App;
