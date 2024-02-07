// Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication.jsx';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

// context
import { AuthProvider } from './context/AuthContext.jsx';

// Css
import './App.css'

//Componentes
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

// Pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from './pages/Login/Login.jsx';
import RedirectLogin from './pages/RedirectLogin/RedirectLogin.jsx';
import CreateLine from './pages/CreateLine/CreateLine.jsx';
import CreateFunc from './pages/CreateFunc/CreateFunc.jsx';
import Clientes from './pages/Clientes/Clientes.jsx';
import Funcionarios from './pages/Funcionarios/Funcionarios.jsx';
import EditLine from './pages/EditLine/EditLine.jsx';
import EditFunc from './pages/EditFunc/EditFunc.jsx';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={user ? <Home /> : <RedirectLogin />} />
              <Route path='/clientes' element={user ? <Clientes /> : <Navigate to="/login" />} />
              <Route path='/funcionarios' element={user ? <Funcionarios /> : <Navigate to="/login" />} />
              <Route path={`/clientes/alterar/:id`} element={user ? <EditLine /> : <Navigate to="/login" />} />
              <Route path={`/funcionarios/alterar/:id`} element={user ? <EditFunc /> : <Navigate to="/login" />} />
              <Route path='/clientes/add' element={user ? <CreateLine /> : <Navigate to="/login" />} />
              <Route path='/funcionarios/add' element={user ? <CreateFunc /> : <Navigate to="/login" />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
