import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, RouteProps } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useState } from 'react';



function App() {

  type User = any;

  const [user, setUser] = useState<User>({});

  const PrivateRoutes = () => {
    return(
        user.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

  return (
    <div className="App bg-pink-100">
      <Router>
        <Routes>
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login setUser={setUser} /> } />
          <Route element={<PrivateRoutes />}>
                <Route element={<Home />} path="/" />
                {/* <Route element={<Products/>} path="/products"/> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
