import './App.css'

import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Lab from './pages/Lab'
import Login from './pages/Login'
import AdminDebug from './pages/AdminDebug'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'

function App() {

const [carrito, setCarrito] = useState([])

useEffect(() => {

  const carritoGuardado =
    localStorage.getItem('carrito')

  if (carritoGuardado) {

    setCarrito(JSON.parse(carritoGuardado))

  }

}, [])

  useEffect(() => {

    localStorage.setItem(

      'carrito',

      JSON.stringify(carrito)

    )

  }, [carrito])

  return (

    <div>

      <Navbar carrito={carrito} />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route
          path="/productos"
          element={
            <Productos
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route
          path="/servicios"
          element={<Servicios />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />

        <Route
          path="/admin-debug"
          element={<AdminDebug />}
        />

        <Route
  path="/portal"
  element={<Login />}
/>

        <Route
          path="/lab"
          element={<Lab />}
        />


<Route
  path="/dashboard"
  element={<Dashboard />}
/>

      </Routes>

    </div>

  );
}

export default App