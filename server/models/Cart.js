import { Schema, model } from 'mongoose';

const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 }
});

const cartSchema = new Schema({
  userId: { type: String, required: true }, // или `userEmail`, если нет авторизации
  items: [cartItemSchema]
});

export default model('Cart', cartSchema);