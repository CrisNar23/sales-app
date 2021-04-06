import { Router } from 'express'

import {
  getOrders,
  createOrder
} from '../controllers/orders.controller.js'

const router = Router()

// Route to get the list of orders
router.get('/', getOrders)

// Route to create a new order
router.post('/', createOrder)

export default router
