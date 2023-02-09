import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login'
import ToDo from './Components/ToDo';
import Movies from './Components/Movies';
import Item from './Components/Item';
import Navbar from './Components/Navbar';
import Auth from './Components/Auth'
function App() {
  return (
    <div>
      {/* <Movies/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/about' element={<About/>}></Route>
        
        <Route path='/toDo' element={<ToDo/>}></Route>
        <Route element={<Auth/>}>
          <Route path='/movies' element={<Movies/>}></Route>
          <Route path='/item' element={<Item/>}></Route>
        </Route>
        
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
