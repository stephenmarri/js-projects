import { Outlet } from "react-router-dom";
import Copyright from "./Components/Copyright"
import Navbar from "./Pages/Navbar/Navbar";

function App() {

  return (
    <>
      <div id="main_container">
      <Navbar />
        <Outlet />
      <Copyright />
      </div>
    </>
  )
}

export default App
