import Home from "./Screens/User_Interface/Home";
import SignIn_SignUp from "./Screens/User_Interface/SigIn_SignUp";
import UserDashboard from "./Screens/User_Interface/userDashboard/UserDashboard/UserDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Context
import { DataProvider } from "./Context/Context";
import OpenMessage from "./Screens/User_Interface/userDashboard/UserDashboard/OpenDocument/OpenDocument";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route Component={Home} path="/Home"></Route>
            <Route Component={SignIn_SignUp} path="/SignIn_SignUp"></Route>
            <Route Component={UserDashboard} path="/UserDashboard"></Route>
            <Route Component={OpenMessage} path="/openmessage"></Route>
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
