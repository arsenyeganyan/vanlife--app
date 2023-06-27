import ReactDOM from 'react-dom/client';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import "./Styles/default.css";
import "./Styles/login.css"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from './Pages/Login';
import Error from './Error';
import ErrorMsg from './Components/ErrorMsg';
import Vans, { loader as vansLoader } from "./Pages/Vans/Vans";
import VanDetail, { detailsLoader as vansDetailLoader } from './Pages/Vans/VanDetail';
import Layout from './Components/Layout';
import HostLayout from './Pages/Host/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import VanHost, { loader as vanHostLoader } from './Pages/Host/VanHost';
import VanHostDetails, { loader as vanHostDetailLoader } from './Pages/Host/VanHostDetails';
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import { requireAuth } from './utils';

import "./server";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='login' element={<Login />}/>
    <Route 
      path='vans' 
      loader={vansLoader} 
      element={<Vans />}
      errorElement={<ErrorMsg />}
    />
    <Route 
      path='vans/:id'
      loader={vansDetailLoader}
      element={<VanDetail />}
    />

    <Route path='host' element={<HostLayout />}>
      <Route 
        index
        element={<Dashboard />}
        loader={async () => await requireAuth()}
      />
      <Route 
        path='income'
        element={<Income />}
      />
      <Route 
        path='reviews'
        element={<Reviews />}
      />
      <Route 
        path='vans' 
        element={<VanHost />}
        loader={vanHostLoader}
      />

      <Route 
        path='vans/:id' 
        element={<VanHostDetails />}
        loader={vanHostDetailLoader}>
          <Route 
            index
            element={<HostVanInfo />}
          />
          <Route 
            path='pricing'
            element={<HostVanPricing />}
          />
          <Route 
            path='photos' 
            element={<HostVanPhotos />}
          />
      </Route>
    </Route>
    <Route path='*' element={<Error />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);