import db from '../Config/db.js'

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users WHERE Email = ?";
        db.query(sql, [email], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        });
    });
};

const createUser = (name, email, password, role) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO users (Name, Email, Password, Role) VALUES (?, ?, ?, ?)";
        db.query(sql, [name, email, password, role], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM product";
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getCategories = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM category";
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getBrands = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM brand";
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};
const getFeatures = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM feature";
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getFeatureDetail = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM featuredetail";
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getBasket = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM basket";
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const getOrders = () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM orders";
      db.query(sql, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  };
  
  const getProductById = (productID) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM product WHERE ProductID = ?";
      db.query(sql, [productID], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  };


export default { getUserByEmail, createUser, getProducts, getCategories, getBrands, getFeatures, getFeatureDetail, getBasket, getProductById, getOrders };
