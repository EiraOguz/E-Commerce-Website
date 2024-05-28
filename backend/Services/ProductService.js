import db from '../Config/db.js'

class ProductService {
    
    static async searchProducts(filters) {
        const { category, brand, feature, search } = filters;
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

        return new Promise((resolve, reject) => {
            db.query(sql, params, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }

    static getCategories = () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM category";
            db.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };
    
    static getBrands = () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM brand";
            db.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };
    static getFeatures = () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM feature";
            db.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };
    
    static getFeatureDetails = () => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM featuredetail";
            db.query(sql, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };
}

export default ProductService;