const User = require('../models/User');
const generateToken = require('../utils/jwtHelper');

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = generateToken(user._id);
  res.json({ token });
};
