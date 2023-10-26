import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Viewnurse from './components/Viewnurse';
import Booking from './components/Booking';
import Bookingconfirm from './components/Bookingconfirm';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/viewnurse",
    element: <Viewnurse/>,
  },
  {
    path: "/booking",
    element: <Booking/>,
  },
  {
    path: "/bookingconfirm",
    element: <Bookingconfirm/>,
  },
]);

function App() {
  return (
    <div className="App">
        <h1 className='heading'>Nurse Booking Website</h1>
        <img className='image' src='https://t3.ftcdn.net/jpg/05/14/36/48/360_F_514364850_xLOQX6SOY2qcjAIcTowsi3xYvHmhmvs0.jpg' alt='Hospital Logo' width={120} height={120}></img>
        <br></br>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
