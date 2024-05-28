import Service from '../Services/ProductService.js';

class ProductController {

  static searchfilters = async (req, res) => {
    const { category, brand, feature, search } = req.query;

    try {
        const result = await Service.searchProducts({ category, brand, feature, search });
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    };
  
    static categories = async (req, res) => {
      try {
          const result = await Service.getCategories();
          res.json(result);
      }
      catch (error) {
      res.status(500).json({ message: "Internal server error" });
      }
  };
  
  static brands = async (req, res) => {
      try {
          const result = await Service.getBrands();
          res.json(result);
      }
      catch (error) {
      res.status(500).json({ message: "Internal server error" });
      }
  };
  
  static features = async (req, res) => {
      try {
          const result = await Service.getFeatures();
          res.json(result);
      }
      catch (error) {
      res.status(500).json({ message: "Internal server error" });
      }
  };
  
  static featuredetails = async (req, res) => {
      try {
          const result = await Service.getFeatureDetails();
          res.json(result);
      }
      catch (error) {
      res.status(500).json({ message: "Internal server error" });
      }
  };
  }
  
  export default ProductController;