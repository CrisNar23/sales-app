import { LocalStorage } from "node-localstorage";
import { currentDate, orderNumber } from "../utils/utils.js";

// Constructor function to create a storage directory inside our project for all our localStorage setItem.
var localStorage = new LocalStorage("./scratch");

// Orders by default
const orders = [
  {
    sellerStore: "Mercado Libre",
    shippingMethod: 6,
    internalOrderNumber: orderNumber(),
    externalOrderNumber: "1234",
    buyerFullName: "Christian Naranjo",
    buyerPhoneNumber: "3122401749",
    buyerEmail: "cristian@hotmail.com",
    shippingAddress: "Cra 20 # 10-15",
    shippingCity: "Pasto",
    shippingRegion: "Nariño",
    shippingCountry: "Colombia",
    productsList: [
      {
        productName: "Celular",
        productQty: 1,
        productWeight: 100,
      },
    ],
    createdAt: currentDate(),
  },
  {
    sellerStore: "Amazon",
    shippingMethod: 6,
    internalOrderNumber: orderNumber(),
    externalOrderNumber: "1234",
    buyerFullName: "David Lopez",
    buyerPhoneNumber: "3154432351",
    buyerEmail: "david@gmail.com",
    shippingAddress: "Cra 20 # 10-15",
    shippingCity: "Bogotá",
    shippingRegion: "Cundinamarca",
    shippingCountry: "Colombia",
    productsList: [
      {
        productName: "Zapatos",
        productQty: 1,
        productWeight: 100,
      },
    ],
    createdAt: currentDate(),
  },
  {
    sellerStore: "Ebay",
    shippingMethod: 6,
    internalOrderNumber: orderNumber(),
    externalOrderNumber: "1234",
    buyerFullName: "Esteban Villa",
    buyerPhoneNumber: "3844438844",
    buyerEmail: "esteban@gmail.com",
    shippingAddress: "Cra 60 # 10-15",
    shippingCity: "Cali",
    shippingRegion: "Valle del Cauca",
    shippingCountry: "Colombia",
    productsList: [
      {
        productName: "Computador",
        productQty: 1,
        productWeight: 100,
      },
    ],
    createdAt: currentDate(),
  },
];

// Setting localStorage Item
localStorage.setItem("orders", JSON.stringify(orders));

// Function to get orders list
export const getOrders = async (req, res) => {
  try {
    // Get localStorage item with the key Name
    const response = await JSON.parse(localStorage.getItem("orders"));
    // Status validation
    response.length !== 0
      ? res.status(200).json(response)
      : res.status(404).json({ message: "Data not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to create a new order
export const createOrder = async (req, res) => {
  const order = req.body;

  if (order === undefined) res.status(400).json({ message: "Bad Request" });

  try {
    // Get localStorage item with the key Name
    const response = await JSON.parse(localStorage.getItem("orders"));
    const newOrder = [...response, order];

    // Status validation
    response.length !== 0
      ? // Setting localStorage Item
        (localStorage.setItem("orders", JSON.stringify(newOrder)),
        res.status(200).json({ message: "Order created successfully" }))
      : res.status(404).json({ message: "Data not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
