// import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import CoinFlip from './components/CoinFlip';

function App() {
  return (
    <div className="App">
      <div className='mb-5'>
        <CoinFlip/>
      </div>
      <div className='my-5'>
        <Accordion/>
      </div>
      
    </div>
  );
}

export default App;
