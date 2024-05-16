import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "everlooktestserver"
});

app.listen(4000, () => {
    console.log("Connected..")
});

// Login =>
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE Email = ?";
    const values = [email];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.json({ success: false, message: "Invalid email format." });
    }

    db.query(sql, values, (err, result) => {
        if (err) return res.json(err);

        if (result.length > 0) {
            const user = result[0];
            bcrypt.compare(password, user.Password, (err, isMatch) => {
                if (err) return res.json(err);
                if (isMatch) {
                    return res.json({ success: true });
                } else {
                    return res.json({ success: false, message: "Username or password is incorrect" });
                }
            });
        } else {
            return res.json({ success: false, message: "Username or password is incorrect" });
        }
    });
});

// Sign up =>
app.post('/signup', (req, res) => {
    const { name, email, password, role } = req.body;

    // Şifre güvenliği ve e-posta kontrolü
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!passwordRegex.test(password)) {
        return res.json({ success: false, message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number." });
    }

    if (!emailRegex.test(email)) {
        return res.json({ success: false, message: "Invalid email format." });
    }

    // Şifre hash'leme
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.json(err);

        const insertSql = "INSERT INTO users (Name, Email, Password, Role) VALUES (?, ?, ?, ?)";
        const insertValues = [name, email, hash, role];

        db.query(insertSql, insertValues, (err, result) => {
            if (err) return res.json(err);
            return res.json({ success: true });
        });
    });
});
