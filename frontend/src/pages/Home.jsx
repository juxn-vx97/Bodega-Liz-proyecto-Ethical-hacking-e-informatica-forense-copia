import { useState } from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Comentarios from '../components/Comentarios'
import BannerPromo from '../components/BannerPromo'
import Categorias from '../components/Categorias'
import Promociones from '../components/Promociones'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

import cocaColaImg from '../assets/cocacola.jpg'
import laysImg from '../assets/lays.jpg'
import oreoImg from '../assets/oreo.jpg'

import aguaImg from '../assets/aguacielo.webp'
import doritosImg from '../assets/doritos.jpg'
import gloriaImg from '../assets/lechegloria.webp'

function Home(props) {

  // VULNERABILIDAD CLIENT-SIDE
  // Manipulación de precios desde URL

  const query = new URLSearchParams(
    window.location.search
  )

  const promo = query.get('promo')

  const productos = [

    {
      id: 1,
      nombre: 'Coca Cola',
      precio: promo ? '0.10' : '4.50',
      imagen: cocaColaImg,
      categoria: 'Bebidas'
    },

    {
      id: 2,
      nombre: 'Papas Lays',
      precio: promo ? '0.20' : '3.00',
      imagen: laysImg,
      categoria: 'Snacks'
    },

    {
      id: 3,
      nombre: 'Galletas Oreo',
      precio: promo ? '0.15' : '2.50',
      imagen: oreoImg,
      categoria: 'Galletas'
    },

    {
      id: 4,
      nombre: 'Doritos',
      precio: promo ? '0.30' : '5.00',
      imagen: doritosImg,
      categoria: 'Snacks'
    },

    {
      id: 5,
      nombre: 'Leche Gloria',
      precio: promo ? '0.40' : '5.50',
      imagen: gloriaImg,
      categoria: 'Primera necesidad'
    },

    {
      id: 6,
      nombre: 'Agua Cielo',
      precio: promo ? '0.05' : '2.00',
      imagen: aguaImg,
      categoria: 'Bebidas'
    }

  ]

  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState('Todos')

  const productosFiltrados =

    categoriaSeleccionada === 'Todos'

      ? productos

      : productos.filter(

          (producto) =>

            producto.categoria ===
            categoriaSeleccionada

        )

  return (

    <div>

      <Hero />

      <Categorias
        setCategoriaSeleccionada={
          setCategoriaSeleccionada
        }
      />

      <BannerPromo />

      <section className="page-title">

        <h1>
          Productos Destacados
        </h1>

        <p>
          Descubre nuestros productos más populares.
        </p>

      </section>

      <section className="products">

        {
          productosFiltrados.map((producto) => (

            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              carrito={props.carrito}
              setCarrito={props.setCarrito}
            />

          ))
        }

      </section>

      <Comentarios />

      <Footer />

    </div>

  )

}

export default Home