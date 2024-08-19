import { useState } from "react";
import Enter from "./components/Enter";
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SendWishes from "./components/SendWishes";
import Error from "./components/Error";
import View from "./components/View";


function App() {
  const [isUserAuthenicated, setisUserAuthenicated] = useState(false);
  const [createdByUserID, setcreatedByUserID] = useState();
  
  

  return (
    <>
    <div id="app_container">
    <Router>
      <Routes>

          <Route path="/signup" element={<Signup />} />
          <Route path="/enter" element={<Enter setIsUserAuthenicated={setisUserAuthenicated} setcreatedByUserID={setcreatedByUserID} />} />
          <Route path="/send" element={<SendWishes isUserAuthenticated={isUserAuthenicated} createdByUserID={createdByUserID} />} />
          <Route path="/view" element={<View isUserAuthenticated={isUserAuthenicated} userId={createdByUserID} />} />

      </Routes>
    </Router>

    </div>
    </>
  )
}

export default App
