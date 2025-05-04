const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Кольца', 'Серьги', 'Подвески', 'Браслеты', 'Колье', 'Комплекты']
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} - невалидный URL изображения!`
    }
  },
  description: {
    type: String,
    required: true,
    maxlength: 500
  },
  material: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false // Отключаем поле __v
});

// Индексы для ускорения поиска
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });

module.exports = mongoose.model('Product', productSchema);