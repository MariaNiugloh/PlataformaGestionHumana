import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de Gestión Humana funcionando correctamente'
  })
})

export default app

/* 
express() → crea nuestra aplicación.
express.json() → permite recibir datos en formato JSON.
app.get('/') → crea nuestra primera ruta.
res.json() → devuelve una respuesta JSON.
export default app → permite utilizar esta aplicación desde server.js. */