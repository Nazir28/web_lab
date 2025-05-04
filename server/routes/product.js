const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 

router.get('/', async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    if (category && category !== 'Все') {
      query.category = category;
    }

    console.log('Выполняем запрос с параметрами:', query);
    const products = await Product.find(query);
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

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id }); 
    
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