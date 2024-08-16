import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

// Hooks
import { useState, useEffect } from "react";
import { UserAuthentication } from './hooks/userAuthentication';

// Context
import { AuthProvider } from './context/AuthContext';

// Pages
import Home from "./pages/Home/Home";
import Party from "./pages/Party/Party";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateParty from './pages/CreateParty/CreateParty';
import Dashboard from "./pages/Dashboard/Dashboard";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = UserAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
              <Route path="/party" element={user ? <Party /> : <Navigate to="/login"/>} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/parties/create" element={user ? <CreateParty /> : <Navigate to="/login" />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login"/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
