import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Service from '../Services/Service.js';
import db from '../Config/db.js'

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Service.getUserByEmail(email);
        if (!user) return res.json({ loginsuccess: false, message: "Email incorrect" });

        const checkpassword = await bcrypt.compare(password, user.Password);
        if (!checkpassword) return res.json({ loginsuccess: false, message: "Password incorrect" });

        const token = jwt.sign({ ID: user.ID, Email: user.Email, Name: user.Name, Role: user.Role }, process.env.JWT_SECRET);
        res.json({ loginsuccess: true, token: token });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.json({ signupsuccess: false, message: "Invalid email format" });
        }

        if (!password || password.length < 8) {
            return res.json({ signupsuccess: false, message: "Password must be at least 8 characters long" });
        }

        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            return res.json({ signupsuccess: false, message: "Password must contain both uppercase and lowercase letters" });
        }

        const existingUser = await Service.getUserByEmail(email);
        if (existingUser) return res.json({ signupsuccess: false, message: "This email already has an account" });

        const hashedPassword = await bcrypt.hash(password, 10);
        await Service.createUser(name, email, hashedPassword, role);

        const user = await Service.getUserByEmail(email);
        const token = jwt.sign({ ID: user.ID, Email: user.Email, Name: user.Name, Role: user.Role }, process.env.JWT_SECRET);
        res.json({ signupsuccess: true, token: token });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const profile = async (req, res) => {
    try {
        const token = req.body.token;
        if (!token) return res.json({ message: "Token is missing" });

        const decodedtoken = jwt.verify(token, process.env.JWT_SECRET);

        res.json({ userData: decodedtoken });
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

const products = async (req, res) => {
    const { category, brand, feature, search } = req.query;
    let sql = "SELECT * FROM product WHERE 1=1";
  
    const params = [];
  
    if (category) {
      sql += " AND CategoryID = ?";
      params.push(category);
    }
  
    if (brand) {
      sql += " AND BrandID = ?";
      params.push(brand);
    }
  
    if (feature) {
      sql += " AND FeatureID = ?";
      params.push(feature);
    }
  
    if (search) {
      sql += " AND Name LIKE ?";
      params.push(`%${search}%`);
    }
  
    try {
      const result = await new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

const categories = async (req, res) => {
    try {
        const result = await Service.getCategories();
        res.json(result);
    }
    catch (error) {
    res.status(500).json({ message: "Internal server error" });
    }
};

const brands = async (req, res) => {
    try {
        const result = await Service.getBrands();
        res.json(result);
    }
    catch (error) {
    res.status(500).json({ message: "Internal server error" });
    }
};

const features = async (req, res) => {
    try {
        const result = await Service.getFeatures();
        res.json(result);
    }
    catch (error) {
    res.status(500).json({ message: "Internal server error" });
    }
};

const featuredetail = async (req, res) => {
    try {
        const result = await Service.getFeatureDetail();
        res.json(result);
    }
    catch (error) {
    res.status(500).json({ message: "Internal server error" });
    }
};

const basket = async (req, res) => {
    try {
        const result = await Service.getBasket();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const orders = async (req, res) => {
  try {
    const result = await Service.getOrders();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const product = async (req, res) => {
  const { productID } = req.body;
  try {
    const product = await Service.getProductById(productID);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { login, signup, profile, products, categories, brands, features, featuredetail, basket, product, orders };
