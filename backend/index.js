import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"everlooktestserver"    
})

app.listen(4000, ()=>{
    console.log("Connected..")
})

//Login =>

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";
    const values = [email, password];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.json(err);
        
        if (result.length > 0) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false, message: "Username or password is incorrect" });
        }
    });
});

//Sign up =>

app.post('/Signup' , (req, res) => {
    const sql = "INSERT INTO users (Name, Email, Password, Role) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.Name,
        req.body.Email,
        req.body.Password,
        req.body.Role
    ];
    
    db.query(sql, values, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    });
});