const moment = require("moment");

// Get the current date from the system
export const currentDate = () => moment().format("YYYY-MM-DD HH:mm:ss");

// Get the epoch time from the system
export const epochTime = () => moment().format("X");

// Generate order number
export const orderNumber = () =>
  `MSE${epochTime()}${Math.floor(Math.random() * 101)}`;