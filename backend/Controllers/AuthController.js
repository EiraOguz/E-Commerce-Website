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

        const token = jwt.sign({ id: user.id, email: user.Email }, process.env.JWT_SECRET);
        res.json({ loginsuccess: true, token: token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

const signup = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const checkemail = await userService.getUserByEmail(email);
        if (checkemail) {
            return res.json({signupsuccess:false, message: "This email already has an account" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await userService.createUser(name, email, hashedPassword, role);
        res.json({signupsuccess: true});
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


export default { login, signup };
