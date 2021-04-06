import express from 'express'
import cors from 'cors'
import shippingRoutes from './routes/shipping.routes.js'
import orderRoutes from './routes/orders.routes.js'

// Create a new express server
const app = express()

// Application Port
const port = process.env.port || 3001

app.use(cors())

// Parse request to JSON
app.use(express.json())

// Main route to manage orders
app.use('/shippings', shippingRoutes)

// Main route to manage orders
app.use('/orders', orderRoutes)

// Listening requests into defined port
app.listen(port, () =>
  console.log(
    `Server listening on port: ${port} ->`,
    new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })
  )
)
