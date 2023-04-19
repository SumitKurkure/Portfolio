import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import ScheduleCall from './Component/ScheduleCall';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/schedule' element={<ScheduleCall />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
