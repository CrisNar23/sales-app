import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid, Container, Button } from '@material-ui/core'
import useStyles from '../../styles'
import Order from '../Order/Order'
import { getOrders } from '../../api/ordersAPI'

const Orders = () => {
  const classes = useStyles()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrdersList = async () => {
      const orders = await getOrders()
      setOrders(orders.data)
    }

    getOrdersList()
  }, [])

  return (
    <>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Sell Orders
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              This is your list of sell orders
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button
                    variant='contained'
                    color='primary'
                    component={Link}
                    to='/newOrder'
                  >
                    Create new order
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {orders.map((order) => (
              <Grid item key={order.internalOrderNumber} xs={12} sm={6} md={4}>
                <Order key={order.internalOrderNumber} order={order} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default Orders
