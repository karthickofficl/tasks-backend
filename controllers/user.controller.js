const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check existing user
        const existingUser = await userModel.findOne({ where: { email } });
        if (existingUser) {
            res.status(409).json({ status: 409, message: "user name existed" });
        }
        // check password bcrypt after store
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({ name, email, password: hashedPassword });
        res.status(201).json({ status: 201, message: "success", user });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

module.exports = { createUser };
