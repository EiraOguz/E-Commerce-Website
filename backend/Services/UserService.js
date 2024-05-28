import db from '../Config/db.js'

    class UserService {

    static getUserByEmail = (email) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM users WHERE Email = ?";
            db.query(sql, [email], (err, result) => {
                if (err) reject(err);
                resolve(result[0]);
            });
        });
    };

    static createUser = (name, email, password, role) => {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO users (Name, Email, Password, Role) VALUES (?, ?, ?, ?)";
            db.query(sql, [name, email, password, role], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    };
}

export default UserService;