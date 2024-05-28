import db from '../Config/db.js'

class StockService {

    static getStock = (FeatureDetailID, ProductID) => {
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM stock WHERE FeatureDetailID = ? AND ProductID = ?";
          db.query(sql, [FeatureDetailID, ProductID], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
          });
        });
      };
        static updateStock = (ProductID, NumberOfProduct) => {
          return new Promise((resolve, reject) => {
            const sql = "UPDATE stock SET StockNumber = StockNumber - ? WHERE ProductID = ?";
            db.query(sql, [NumberOfProduct, ProductID], (err, result) => {
              if (err) reject(err);
              resolve(result);
            });
          });
        };
}

export default StockService;