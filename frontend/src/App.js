import './App.css';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contacts from './Pages/Contacts.jsx'
import Products from './Pages/Products.jsx'
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails.jsx';
import UserDashboard from './Pages/UserDashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
   <>
      <Header/>
      <Routes>
        <Route index element = {<Home/>}></Route>
        <Route exact path='/Home' element = {<Home/>}></Route>
        <Route exact path='/About' element = {<About/>}></Route>
        <Route exact path='/Contacts' element = {<Contacts/>}></Route>
        <Route exact path='/Products' element = {<Products/>}></Route>
        <Route exact path='/Products/:id' element = {<ProductDetails/>}></Route>
        <Route exact path='/UserDashboard' element = {<UserDashboard/>}></Route>
        <Route exact path='/Login' element = {<Login/>}></Route>
        <Route exact path='/Register' element = {<Register/>}></Route>
      </Routes>
      <Footer/>
  </>
  );
}

export default App;
