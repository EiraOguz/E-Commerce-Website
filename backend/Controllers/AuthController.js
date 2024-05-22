import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userService from '../Services/UserService.js';

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if (!user) return res.json({ loginsuccess: false, message: "Email incorrect" });

        const checkpassword = await bcrypt.compare(password, user.Password);
        if (!checkpassword) return res.json({ loginsuccess: false, message: "Password incorrect" });

        const token = jwt.sign({ ID: user.ID, Email: user.Email, Name : user.Name, Role : user.Role}, process.env.JWT_SECRET);
        res.json({ loginsuccess: true, token: token });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.json({signupsuccess:false, message: "Invalid email format" });
        }

        if (!password || password.length < 8) {
            return res.json({signupsuccess: false, message: "Password must be at least 8 characters long" });
        }

        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            return res.json({signupsuccess: false, message: "Password must contain both uppercase and lowercase letters" });
        }
        
        const checkemail = await userService.getUserByEmail(email);
        if (checkemail) return res.json({signupsuccess:false, message: "This email already has an account" });

        const hashedPassword = await bcrypt.hash(password, 10);
        await userService.createUser(name, email, hashedPassword, role);

        const user = await userService.getUserByEmail(email);
        const token = jwt.sign({ ID: user.ID, Email: user.Email, Name : user.Name, Role : user.Role}, process.env.JWT_SECRET);
        res.json({signupsuccess: true, token: token});

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


export default { login, signup, profile };
