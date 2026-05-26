import { useState } from 'react'

function Comentarios() {

  const [comentario, setComentario] = useState('')

  const [comentarios, setComentarios] = useState([])

  function agregarComentario() {

    if (comentario.trim() !== '') {

      setComentarios([

        ...comentarios,

        comentario

      ])

      setComentario('')

    }

  }

  return (

    <section className="comentarios-container">

      <h2>
        Comentarios de clientes
      </h2>

      <p>
        Comparte tu experiencia con Bodega Liz.
      </p>

      <div className="comentario-form">

        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <button onClick={agregarComentario}>
          Publicar
        </button>

      </div>

      <div className="comentarios-lista">

        {
          comentarios.map((item, index) => (

            <div
              className="comentario-card"
              key={index}

              dangerouslySetInnerHTML={{             // Vulnerabilidad 
                __html: item
              }}

            />

          ))
        }

      </div>

    </section>

  )
}

export default Comentarios