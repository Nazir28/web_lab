const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Убрал .default.default

// Получить все товары (с поиском)
router.get('/', async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Поиск по названию
    }

    if (category && category !== 'Все') {
      query.category = category;
    }

    console.log('Выполняем запрос с параметрами:', query);
    const products = await Product.find(query); // Используем query здесь
    console.log('Найдено товаров:', products.length);
    
    res.json(products);
  } catch (err) {
    console.error('Ошибка при поиске товаров:', err);
    res.status(500).json({ 
      message: 'Ошибка сервера',
      error: err.message 
    });
  }
});

// Получить товар по ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id }); // Используем числовой id вместо _id
    
    if (!product) {
      return res.status(404).json({ message: 'Товар не найден' });
    }
    
    res.json(product);
  } catch (err) {
    console.error('Ошибка при поиске товара по ID:', err);
    res.status(500).json({ 
      message: 'Ошибка сервера',
      error: err.message 
    });
  }
});

module.exports = router;