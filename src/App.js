import './App.css';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About'
import Find from './components/find/Find';
import Order from './components/order/OrderNow';

function App() {
  return (
    <>
      <div className='containter'>
        <NavBar />
        <Banner />
        <About />
        <Find />
        <Order />
      </div>
    </>
  );
}

export default App;
