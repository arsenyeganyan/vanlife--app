import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Styles/default.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from './Pages/Vans/VanDetail';
import Layout from './Components/Layout';
import HostLayout from './Pages/Host/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import VanHost from './Pages/Host/VanHost';
import Reviews from './Pages/Host/Reviews';
import VanHostDetails from './Pages/Host/VanHostDetails';
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetail />}/>

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path='income' element={<Income />}/>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='vans' element={<VanHost />}/>

            <Route path='vans/:id' element={<VanHostDetails />}>
              <Route index element={<HostVanInfo />}/>
              <Route path='pricing' element={<HostVanPricing />}/>
              <Route path='photos' element={<HostVanPhotos />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;