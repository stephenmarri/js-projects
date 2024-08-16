import { Outlet } from "react-router-dom";
import Copyright from "./Components/Copyright"
import Navbar from "./Pages/Navbar/Navbar";
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <div id="main_container">
        <Analytics />
        <Navbar />
        <Outlet />
        <Copyright />
      </div>
    </>
  )
}

export default App
