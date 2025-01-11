
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './component/Layout/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/Pages/About.js';
import Home from './component/Pages/Home.js';
import Gallery from './component/Pages/Gallery.js';
import Register from './component/Pages/Register.js';
import Show from './component/Pages/Show.js';
import ErrorPage from './component/Pages/ErrorPage.js'
import Update from './component/Pages/Update.js';
import Delete from './component/Pages/Delete.js';

function App() {
  return (
    <div >
       <BrowserRouter>
               <Navbar/>
               <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/gallery' element={<Gallery/>}></Route>
                        <Route path='/register' element={<Register/>}></Route>      
                        <Route path='/show' element={<Show/>}></Route> 
                        <Route path='/update/student/:studentID' element={<Update/>}></Route>
                        <Route path='/delete/student/:studentID' element={<Delete/>}></Route>
                        <Route path='*' element={<ErrorPage/>}></Route>     
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
