import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login'
import ToDo from './Components/ToDo';
import Movies from './Components/Movies';
import Item from './Components/Item';
import Navbar from './Components/Navbar';
import Auth from './Components/Auth';

import Cart from './Components/Cart';
import Counter from './Components/Counter';

import { Provider } from 'react-redux';
import { store } from './Redux/Store';
function App() {
  return (
    <div>
      {/* <Movies/> */}
      <Provider store={store}>
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

        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
