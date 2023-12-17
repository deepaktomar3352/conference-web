import Home from './Screens/User_Interface/Home';
import SignIn_SignUp from './Screens/User_Interface/SigIn_SignUp';
import UserDashboard from './Screens/User_Interface/userDashboard/UserDashboard/UserDashboard';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route Component={Home} path='/Home'></Route>
        <Route Component={SignIn_SignUp} path='/SignIn_SignUp'></Route>
        <Route Component={UserDashboard} path='/UserDashboard'></Route>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
