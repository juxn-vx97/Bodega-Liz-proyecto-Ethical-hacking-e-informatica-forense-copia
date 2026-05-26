import { useState } from 'react'

function Comentarios() {

  const [comentario, setComentario] = useState('')

  const [comentarios, setComentarios] = useState([])

  function agregarComentario() {

    if (comentario.trim() === '') {

      return

    }

    setComentarios([

      ...comentarios,

      comentario

    ])

    setComentario('')

  }

  return (

    <section className="comentarios">

      <h1>
        Comentarios
      </h1>

      <p>
        Comparte tu experiencia.
      </p>

      <div className="comentario-form">

        <input
          type="text"
          placeholder="Escribe un comentario"
          value={comentario}
          onChange={(e) =>
            setComentario(e.target.value)
          }
        />

        <button onClick={agregarComentario}>

          Publicar

        </button>

      </div>

      <div className="comentarios-lista">

        {
          comentarios.map((comentario, index) => (

            <div
              key={index}

              dangerouslySetInnerHTML={{
                __html: comentario
              }}

            />

          ))
        }

      </div>

    </section>

  )

}

export default Comentarios