import Service from '../Services/StockService.js';

class StockController {

    static stock = async (req, res) => {
        const { FeatureDetailID, ProductID } = req.body;
        try {
          const stock = await Service.getStock(FeatureDetailID, ProductID);
          res.json(stock);
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      };

      static updateStock = async (req, res) => {
        const { ProductID, NumberOfProduct } = req.body;
        try {
          await Service.updateStock(ProductID, NumberOfProduct);
          res.json({ success: true });
        } catch (error) {
          res.status(500).json({ success: false, message: "Internal server error" });
        }
      };

}

export default StockController;