const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '30d'
    });
  };
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userExists = await User.findOne({ email });
      console.log(1)
      if (userExists) {
        return res.status(400).json({ message: 'Пользователь уже существует' });
      }
      console.log(2)
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(3)
      const user = await User.create({
        email,
        password: hashedPassword
      });
      console.log(4)
  
      res.status(201).json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id)
      });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });
  
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user._id,
          email: user.email,
          token: generateToken(user._id)
        });
      } else {
        res.status(401).json({ message: 'Неверные учетные данные' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  });

module.exports = router;