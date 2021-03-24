import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Input,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Typography,
  Divider,
  Button,
  Card,
  CardContent,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import {
  getShippingMethods,
  getShippingDetails,
  getOffDays,
} from "../../api/ordersAPI";
import useStyles from "../../styles";
import { Link } from "react-router-dom";

const NewOrder = () => {
  const classes = useStyles();

  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingMethodsLst, setShippingMethodsLst] = useState([]);
  const [offDays, setOffDays] = useState([]);
  const [shippingDetails, setShippingDetails] = useState({});
  const [formData, setFormData] = useState({ productsList: [] });
  const [productLst, setProductLst] = useState({});
  const [productArr, setProductArr] = useState([]);

  useEffect(() => {
    const getParameters = async () => {
      const shippingMethods = await getShippingMethods();
      const offDays = await getOffDays();
      setShippingMethodsLst(shippingMethods.data);
      setOffDays(offDays.data);
    };

    getParameters();
  }, []);

  const getShippingDetailsLst = async (id) => {
    const shippingDetails = await getShippingDetails(id);
    setShippingDetails(shippingDetails.data);
  };

  const handleChange = (event) => {
    if (event.target.name === "shippingMethod") {
      setShippingMethod(event.target.value);
      getShippingDetailsLst(event.target.value);
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleProducts = (event) => {
    setProductLst({
      ...productLst,
      [event.target.name]: event.target.value,
    });
  };

  const storeProducts = () => {
    let arr = [...productArr, productLst];
    setProductArr(arr);
  };

  const handleSubmit = (event) => {
    console.log("hola");
    event.preventDefault();
    setFormData({
      ...formData,
      productsList: productArr,
    });
  };

  return (
    <>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Create Order
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Typography variant="h5">Order</Typography>
              <Divider className={classes.divider} />
              <Grid className={classes.gridContainer} container spacing={4}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="store">Store</InputLabel>
                    <Input
                      id="store"
                      name="store"
                      type="text"
                      aria-describedby="store-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="store-helper">
                      Seller Store
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shippingMethod">
                      Shipping Method
                    </InputLabel>
                    <Select
                      labelId="shippingMethod"
                      id="shippingMethod"
                      name="shippingMethod"
                      value={shippingMethod}
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {shippingMethodsLst.map((method) => (
                        <MenuItem key={method.id} value={method.id}>
                          {method.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText id="shippingMethod-helper">
                      Shipping Method
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="orderNumber">Order Number</InputLabel>
                    <Input
                      id="orderNumber"
                      name="orderNumber"
                      type="text"
                      aria-describedby="orderNumber-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="orderNumber-helper">
                      External Order Number
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography variant="h5">Shipping</Typography>
              <Divider className={classes.divider} />
              <Grid className={classes.gridContainer} container spacing={4}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="buyerName">Full Name</InputLabel>
                    <Input
                      id="buyerName"
                      name="buyerName"
                      type="text"
                      aria-describedby="buyerName-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="buyerName-helper">
                      Buyer Full Name
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="phone">Phone Number</InputLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="text"
                      aria-describedby="phone-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="phone-helper">
                      Buyer Phone Number
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      aria-describedby="email-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="email-helper">
                      Buyer Email
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      aria-describedby="address-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="address-helper">
                      Shipping Address
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      aria-describedby="city-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="city-helper">
                      Shipping City
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="Region">Region</InputLabel>
                    <Input
                      id="Region"
                      name="Region"
                      type="text"
                      aria-describedby="Region-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="Region-helper">
                      Shipping Region
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      aria-describedby="country-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="country-helper">
                      Shipping Country
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography variant="h5">Products</Typography>
              <Divider className={classes.divider} />
              <Grid className={classes.gridContainer} container spacing={4}>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="productName">Name</InputLabel>
                    <Input
                      id="productName"
                      name="productName"
                      type="text"
                      aria-describedby="productName-helper"
                      onChange={handleProducts}
                    />
                    <FormHelperText id="productName-helper">
                      Product Name
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="amount">Amount</InputLabel>
                    <Input
                      id="amount"
                      name="amount"
                      type="number"
                      aria-describedby="amount-helper"
                      onChange={handleProducts}
                    />
                    <FormHelperText id="amount-helper">
                      Product Quantity
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="weight">Weight</InputLabel>
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      aria-describedby="weight-helper"
                      onChange={handleProducts}
                    />
                    <FormHelperText id="weight-helper">
                      Product Weight
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={2}
                  md={2}
                  className={classes.alignItemsAndJustifyContent}
                >
                  <Button
                    onClick={storeProducts}
                    variant="contained"
                    color="primary"
                  >
                    +
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TableContainer
                    className={classes.tableContainer}
                    component={Paper}
                  >
                    <Table
                      className={classes.table}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Product Name</TableCell>
                          <TableCell align="center">Product Amount</TableCell>
                          <TableCell align="center">
                            Product Weight(lb)
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {productArr.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell
                              component="th"
                              align="center"
                              scope="row"
                            >
                              {row.productName}
                            </TableCell>
                            <TableCell
                              component="th"
                              align="center"
                              scope="row"
                            >
                              {row.amount}
                            </TableCell>
                            <TableCell
                              component="th"
                              align="center"
                              scope="row"
                            >
                              {row.weight}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
              <div className={classes.buttons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button type="submit" variant="contained" color="primary">
                      Create order
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to={"/"}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default NewOrder;
