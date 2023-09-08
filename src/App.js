import './App.css';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contacts from './Pages/Contacts.jsx'
import Products from './Pages/Products.jsx'
import Footer from './components/Footer';
import ProductFullCard from './components/ProductFullcard';
import SignUpIn from './components/SignUpIn.jsx';

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
        <Route exact path='/Products:id' element = {<ProductFullCard/>}></Route>
        <Route exact path='/Sign-up-in' element = {<SignUpIn/>}></Route>
      </Routes>
      <Footer/>
  </>
  );
}

export default App;
