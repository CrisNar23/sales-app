import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
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
  createOrder,
} from "../../api/ordersAPI";
import useStyles from "../../styles";
import { Link } from "react-router-dom";

const NewOrder = () => {
  const classes = useStyles();
  // const navigate = useNavigate()

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
    setFormData({
      ...formData,
      productsList: arr,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOrder(formData);
    // navigate("/");
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
                    <InputLabel htmlFor="sellerStore">Store</InputLabel>
                    <Input
                      id="sellerStore"
                      name="sellerStore"
                      type="text"
                      aria-describedby="sellerStore-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="sellerStore-helper">
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
                    <InputLabel htmlFor="externalOrderNumber">
                      Order Number
                    </InputLabel>
                    <Input
                      id="externalOrderNumber"
                      name="externalOrderNumber"
                      type="text"
                      aria-describedby="externalOrderNumber-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="externalOrderNumber-helper">
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
                    <InputLabel htmlFor="buyerFullName">Full Name</InputLabel>
                    <Input
                      id="buyerFullName"
                      name="buyerFullName"
                      type="text"
                      aria-describedby="buyerFullName-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="buyerFullName-helper">
                      Buyer Full Name
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="buyerPhoneNumber">
                      Phone Number
                    </InputLabel>
                    <Input
                      id="buyerPhoneNumber"
                      name="buyerPhoneNumber"
                      type="text"
                      aria-describedby="buyerPhoneNumber-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="buyerPhoneNumber-helper">
                      Buyer Phone Number
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="buyerEmail">Email</InputLabel>
                    <Input
                      id="buyerEmail"
                      name="buyerEmail"
                      type="buyerEmail"
                      aria-describedby="buyerEmail-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="buyerEmail-helper">
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
                    <InputLabel htmlFor="shippingCity">City</InputLabel>
                    <Input
                      id="shippingCity"
                      name="shippingCity"
                      type="text"
                      aria-describedby="shippingCity-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="shippingCity-helper">
                      Shipping City
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shippingRegion">Region</InputLabel>
                    <Input
                      id="shippingRegion"
                      name="shippingRegion"
                      type="text"
                      aria-describedby="shippingRegion-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="shippingRegion-helper">
                      Shipping Region
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="shippingCountry">Country</InputLabel>
                    <Input
                      id="shippingCountry"
                      name="shippingCountry"
                      type="text"
                      aria-describedby="shippingCountry-helper"
                      onChange={handleChange}
                    />
                    <FormHelperText id="shippingCountry-helper">
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
                    <InputLabel htmlFor="productQty">Amount</InputLabel>
                    <Input
                      id="productQty"
                      name="productQty"
                      type="number"
                      aria-describedby="productQty-helper"
                      onChange={handleProducts}
                    />
                    <FormHelperText id="productQty-helper">
                      Product Quantity
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="productWeight">Weight</InputLabel>
                    <Input
                      id="productWeight"
                      name="productWeight"
                      type="number"
                      aria-describedby="productWeight-helper"
                      onChange={handleProducts}
                    />
                    <FormHelperText id="productWeight-helper">
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
                              {row.productQty}
                            </TableCell>
                            <TableCell
                              component="th"
                              align="center"
                              scope="row"
                            >
                              {row.productWeight}
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
