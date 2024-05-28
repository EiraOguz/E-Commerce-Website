import jwt from 'jsonwebtoken';

const tokenmiddleware = async (req, res) => {
    try {
        const token = req.body.token;
        if (!token) return res.status(401).json({ message: "Unauthorized" });
  
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ userData: decoded });
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
  };
  

export default { tokenmiddleware };