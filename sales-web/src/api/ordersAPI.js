import axios from "axios";

const url = "http://localhost:3000/";

export const getShippingMethods = async () => axios.get(`${url}shippings`);

export const getShippingDetails = async (id) => axios.get(`${url}shippings/${id}`);

export const getOffDays = async () => axios.get(`${url}shippings/off-days`);

export const getOrders = async () => axios.get(`${url}orders`);

export const createOrder = async (newCandidate) => axios.post(`${url}orders`, newCandidate);


