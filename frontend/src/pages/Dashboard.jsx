function Dashboard() {

  return (

    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '40px'
      }}
    >

      <h1
        style={{
          color: '#111',
          fontSize: '40px',
          marginBottom: '20px'
        }}
      >
        Panel Administrativo
      </h1>

      <p
        style={{
          color: '#333',
          fontSize: '20px',
          marginBottom: '40px'
        }}
      >
        Sistema interno de administración
      </p>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >

        <div
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            width: '220px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >

          <h2 style={{ color: '#111' }}>
            Ventas
          </h2>

          <p style={{ color: '#555' }}>
            S/ 12,450
          </p>

        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            width: '220px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >

          <h2 style={{ color: '#111' }}>
            Usuarios
          </h2>

          <p style={{ color: '#555' }}>
            148 clientes
          </p>

        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            width: '220px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >

          <h2 style={{ color: '#111' }}>
            Pedidos
          </h2>

          <p style={{ color: '#555' }}>
            53 activos
          </p>

        </div>

      </div>

    </div>

  )

}

export default Dashboard