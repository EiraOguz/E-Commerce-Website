import Service from '../Services/OrderService.js';


class OrderController {
    static basket = async (req, res) => {
        try {
          const { userID } = req.query;
          const result = await Service.getBasketByUserID(userID);
          res.json(result);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      };

      static product = async (req, res) => {
        const { productID } = req.body;
        try {
          const product = await Service.getProductById(productID);
          res.json(product);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      };
  
      static addToBasket = async (req, res) => {
        const { UserID, ProductID, NumberOfProduct, FeatureDetail } = req.body;
        try {
            const result = await Service.addToBasket(UserID, ProductID, NumberOfProduct, FeatureDetail);
            res.json({ success: true, message: "Product added to basket", result });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    };
  
    static addToOrders = async (req, res) => {
        const { UserID, ProductID, NumberOfProduct } = req.body;
        try {
            const result = await Service.addToOrders(UserID, ProductID, NumberOfProduct);
            res.json({ success: true, message: "Product added to orders", result });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    };
  
    static clearBasket = async (req, res) => {
        try {
          const { userID } = req.query;
          await Service.clearBasketByUserID(userID);
          res.json({ success: true, message: "Cart cleared successfully" });
        } catch (error) {
          res.status(500).json({ success: false, message: "An error occurred while clearing the cart" });
        }
      };

      static removeFromBasket = async (req, res) => {
        const { userID, productID } = req.query;
        try {
          await Service.removeFromBasket(userID, productID);
          res.json({ success: true, message: "Product removed from basket successfully" });
        } catch (error) {
          console.error('Error removing item from basket:', error);
          res.status(500).json({ success: false, message: "Internal server error" });
        }
      };

      static updateBasket = async (req, res) => {
        const { userID, productID, quantity } = req.body;
        try {
          await Service.updateBasket(userID, productID, quantity);
          res.json({ success: true, message: "Basket updated successfully" });
        } catch (error) {
          console.error('Error updating basket:', error);
          res.status(500).json({ success: false, message: "Internal server error" });
        }
      };

    static orders = async (req, res) => {
        try {
          const { userID } = req.query;
          const result = await Service.getOrders(userID);
          res.json(result);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      };
  }
  
  export default OrderController;