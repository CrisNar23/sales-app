import axios from "axios";

// Function to get the list of available shipping methods
export const getShippingMethods = async (req, res) => {
  try {
    // Fetch data from a url endpoint
    const response = await axios({
      method: "get",
      url:
        "https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods",
      headers: { "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT" },
    });
    // Data validation
    response.data != []
      ? res.status(200).json(response.data)
      : res.status(404).json({ message: "Data not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to get shipping method details
export const getShippingDetailsById = async (req, res) => {
  const shippingMethodId = req.params.id;
  try {
    // Fetch data from a url endpoint
    const response = await axios({
      method: "get",
      url: `https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/${shippingMethodId}`,
      headers: { "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT" },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    // Status validation
    error.response.status === 404
      ? res.status(404).json({ message: error.response.statusText })
      : res.status(500).json({ message: "Internal server error" });
  }
};

// Function to get the list of off days
export const getShippingOffDays = async (req, res) => {
  try {
    // Fetch data from a url endpoint
    const response = await axios({
      method: "get",
      url:
        "https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days",
      headers: { "x-api-key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT" },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    // Status validation
    error.response.status === 404
      ? res.status(404).json({ message: error.response.statusText })
      : res.status(500).json({ message: "Internal server error" });
  }
};
