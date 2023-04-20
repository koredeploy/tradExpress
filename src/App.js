import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndividualBusiness from './pages/IndividualBusiness';
import BuyAndSell from './pages/BuyAndSell';
import Almostin from './pages/Almostin';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Navbarr from './components/Navbarr'
import { useEffect, useState } from 'react';



function App() {
  const [crypto, setCrypto] = useState([])


  useEffect(()=>{
    let getData = async()=>{
      let res = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
      let finalData = await res.json()
      console.log(finalData);
      setCrypto(finalData.data)
      console.log(finalData.data[3].name);
    }
    setTimeout(() => {
      getData()
    }, 1000);
  },[])


  return (
    <div className="App">
     <BrowserRouter>
     <Navbarr/>
     <Routes>
      <Route path='/' element={<LandingPage cryptoDetails ={crypto}/>}/>
      <Route path='individualbusiness' element={<IndividualBusiness/>} />
      <Route path='buyandsell' element={<BuyAndSell/>} />
      <Route path='almostin' element={<Almostin/>} />
      <Route path='login' element={<Login/>} />
      <Route path='*' element={<Error404/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
