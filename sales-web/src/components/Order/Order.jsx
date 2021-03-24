import React, { useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider,
} from "@material-ui/core";

import useStyles from "../../styles";

const Order = (order) => {
  // Styles
  const classes = useStyles();

  // Order details
  const {
    sellerStore,
    shippingMethod,
    externalOrderNumber,
    buyerFullName,
    buyerPhoneNumber,
    buyerEmail,
    shippingAddress,
    shippingCity,
    shippingRegion,
    shippingCountry,
    productsList,
    createdAt,
  } = order.order;

  // State Dialog
  const [open, setOpen] = useState(false);

  // Handle event open Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Handle event close Dialog
  const handleClose = () => {
    setOpen(false);
  };

  const createData = (name, value) => {
    return { name, value };
  };

  const orderInfo = [
    createData("External Order Number:", externalOrderNumber),
    createData("Buyer Full Name:", buyerFullName),
    createData("Buyer Phone Number:", buyerPhoneNumber),
    createData("Buyer Email:", buyerEmail),
  ];

  const shippingInfo = [
    createData("Shipping Address:", shippingAddress),
    createData("Shipping City:", shippingCity),
    createData("Shipping Region:", shippingRegion),
    createData("Shipping Country:", shippingCountry),
  ];

  const promisesDatesInfo = [
    // createData("Pack Promise Min", pack_promise_min),
    // createData("Pack Promise Max", pack_promise_max),
    // createData("Ship Promise Min", ship_promise_min),
    // createData("Ship Promise Min", ship_promise_min),
    // createData("Delivery Promise Min", delivery_promise_min),
    // createData("Delivery Promise Max", delivery_promise_max),
    // createData("Ready Pickup Promise Min", ready_pickup_promise_min),
    // createData("Ready Pickup Promise Max", ready_pickup_promise_max),
    createData("Pack Promise Min", 1),
    createData("Pack Promise Max", 1),
    createData("Ship Promise Min", 1),
    createData("Ship Promise Max", 1),
    createData("Delivery Promise Min", 1),
    createData("Delivery Promise Max", 1),
    createData("Ready Pickup Promise Min", 1),
    createData("Ready Pickup Promise Max", 1),
  ];

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="http://source.unsplash.com/random?sales"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography>
            <b>Order ID: </b>
            {externalOrderNumber}
          </Typography>
          <Typography>
            <b>Store: </b>
            {sellerStore}
          </Typography>
          <Typography>
            <b>Created At: </b>
            {createdAt}
          </Typography>
          <Typography>
            <b>Shipping Method: </b>
            {shippingMethod}
          </Typography>
        </CardContent>
        <CardActions align="center">
          <Button size="small" color="primary" onClick={handleClickOpen}>
            Details
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Typography className={classes.modalTitle} variant="h4" align="center">
          Order Details
        </Typography>
        <DialogContent>
          <Typography variant="h5">Order Information</Typography>
          <Divider className={classes.divider} />
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                {orderInfo.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h5">Shipping Info</Typography>
          <Divider className={classes.divider} />
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                {shippingInfo.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h5">Promises Dates</Typography>
          <Divider className={classes.divider} />
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                {promisesDatesInfo.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.name}:
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h5">Products</Typography>
          <Divider className={classes.divider} />
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Product Amount</TableCell>
                  <TableCell align="right">Product Weight(lb)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsList.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" align="center" scope="row">
                      {row.productName}
                    </TableCell>
                    <TableCell component="th" align="center" scope="row">
                      {row.productQty}
                    </TableCell>
                    <TableCell component="th" align="center" scope="row">
                      {row.productWeight}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <Divider className={classes.divider} />
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Order;
