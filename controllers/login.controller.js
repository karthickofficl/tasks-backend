const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        
        const existingUser = await userModel.findOne({ where: { email } });

       
        if (!existingUser) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: 401, message: "Invalid password" });
        }

        // Generate Token
        const token = generateAccessToken(existingUser.id, existingUser.email);

        return res.status(200).json({
            status: 200,
            message: "Login successful",
            user: {
                id: existingUser.id,
                name: existingUser.name,
                email: existingUser.email
            },
            token
        });
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({
            status: 500,
            message: "Internal server error",
            error: error.message,
        });
    }
};

// Generate JWT Token
function generateAccessToken(id, email) {
    return jwt.sign(
        { id, email },
        process.env.JWT_TOKEN_SECRET,
        { expiresIn: "7d" } 
    );
}
