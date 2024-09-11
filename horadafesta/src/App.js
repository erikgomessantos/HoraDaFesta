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
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateParty from './pages/CreateParty/CreateParty';
import Dashboard from "./pages/Dashboard/Dashboard";
import Party from "./pages/Party/Party";
import EditParty from './pages/EditParty/EditParty';
import Contacts from "./pages/Contacts/Contacts";
import CreateContact from "./pages/CreateContact/CreateContact";
import EditContacts from "./pages/EditContacts/EditContacts";
import Attractions from './pages/Attractions/Attractions';
import CreateAttractions from './pages/CreateAttractions/CreateAttractions';
import Tasks from './pages/Tasks/Tasks';
import CreateTasks from './pages/CreateTasks/CreateTasks';
import Places from './pages/Places/Places';
import CreatePlaces from './pages/CreatePlaces/CreatePlaces';
import Suppliers from './pages/Suppliers/Suppliers';
import CreateSuppliers from './pages/CreateSuppliers/CreateSuppliers';

// 11-09-2024
import Users from "./pages/Users/Users";
import EditUsers from './pages/EditUsers/EditUsers';
// 11-09-2024

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
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/parties/create" element={user ? <CreateParty /> : <Navigate to="/login" />} />
              <Route path="/party/:id" element={user ? <Party /> : <Navigate to="/login"/>} />
              <Route path="/parties/edit/:id" element={user ? <EditParty /> : <Navigate to="/login"/>} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login"/>} />
              <Route path="/contacts" element={user ? <Contacts /> : <Navigate to="/login"/>} />
              <Route path="/contacts/create" element={user ? <CreateContact /> : <Navigate to="/login"/>} />
              <Route path="/contacts/edit/:id" element={user ? <EditContacts /> : <Navigate to="/login"/>} />
              <Route path="/attractions" element={user ? <Attractions /> : <Navigate to="/login"/>} />
              <Route path="/attractions/create" element={user ? <CreateAttractions /> : <Navigate to="/login"/>} />
              <Route path="/tasks" element={user ? <Tasks /> : <Navigate to="/login"/>} />
              <Route path="/tasks/create" element={user ? <CreateTasks /> : <Navigate to="/login"/>} />
              <Route path="/places" element={user ? <Places /> : <Navigate to="/login"/>} />
              <Route path="/places/create" element={user ? <CreatePlaces /> : <Navigate to="/login"/>} />
              <Route path="/suppliers" element={user ? <Suppliers /> : <Navigate to="/login"/>} />
              <Route path="/suppliers/create" element={user ? <CreateSuppliers /> : <Navigate to="/login"/>} />
              <Route path="/users" element={user ? <Users /> : <Navigate to="/login"/>} />
              <Route path="/users/edit/:id" element={user ? <EditUsers /> : <Navigate to="/login"/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
