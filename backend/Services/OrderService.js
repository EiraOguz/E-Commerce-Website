import db from '../Config/db.js'

class OrderService {
    static getBasketByUserID = (userID) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM basket WHERE UserID = ?";
            db.query(sql, [userID], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };

    static getProductById = (productID) => {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM product WHERE ProductID = ?";
          db.query(sql, [productID], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
          });
        });
      };

      static async addToBasket(UserID, ProductID, NumberOfProduct, FeatureDetail) {
        const basketItems = await this.getBasketByUserID(UserID);
        const existingItem = basketItems.find(item => item.ProductID === ProductID);

        if (existingItem) {
            throw new Error("This product is already in the basket");
        }

        const sql = "INSERT INTO basket (UserID, ProductID, NumberOfProduct, FeatureDetailID) VALUES (?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            db.query(sql, [UserID, ProductID, NumberOfProduct,FeatureDetail], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static async addToOrders(UserID, ProductID, NumberOfProduct) {
        const product = await this.getProductById(ProductID);
        if (!product) {
            throw new Error("Product not found");
        }

        const totalPrice = product.Price * NumberOfProduct;
        const orderSql = "INSERT INTO orders (Price, NumberOfProduct, UserID, ProductID) VALUES (?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            db.query(orderSql, [totalPrice, NumberOfProduct, UserID, ProductID], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static clearBasketByUserID = (userID) => {
        return new Promise((resolve, reject) => {
          const sql = "DELETE FROM basket WHERE UserID = ?";
          db.query(sql, [userID], (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      };

      static removeFromBasket = (userID, productID) => {
        return new Promise((resolve, reject) => {
          const sql = "DELETE FROM basket WHERE UserID = ? AND ProductID = ?";
          db.query(sql, [userID, productID], (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      };

      static updateBasket = (userID, productID, quantity) => {
        return new Promise((resolve, reject) => {
          const sql = "UPDATE basket SET NumberOfProduct = ? WHERE UserID = ? AND ProductID = ?";
          db.query(sql, [quantity, userID, productID], (err, result) => {
            if (err) reject(err);
            resolve(result);
          });
        });
      };

      static getOrders = (userID) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM orders WHERE UserID = ?";
            db.query(sql, [userID], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };
}

export default OrderService;