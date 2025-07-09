const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already in use" });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email },
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({
      user: { id: user._id, name: user.name, email: user.email },
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
