'use client';
import { motion, AnimatePresence } from 'framer-motion';

import { useCart } from './store';
import { CgClose, CgShoppingCart } from 'react-icons/cg';
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi';

const CartModal = () => {
    const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, closeCart, clearCart } =
        useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 bg-opacity-50 z-40"
                        onClick={closeCart}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween' }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                <CgShoppingCart className="text-gray-800" />
                                <h2 className="text-lg font-semibold">Корзина ({totalItems})</h2>
                            </div>
                            <button onClick={closeCart} className="p-1 rounded-full hover:bg-gray-100">
                                <CgClose className="text-gray-500" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <CgShoppingCart className="w-12 h-12 mb-4" />
                                    <p>Ваша корзина пуста</p>
                                </div>
                            ) : (
                                <ul className="space-y-4">
                                    {cartItems.map((item) => (
                                        <li key={item.id} className="flex gap-4 border-b pb-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-gray-500 hover:text-red-500"
                                                    >
                                                        <BiTrash className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <p className="text-gray-600">
                                                    {item.price.toLocaleString()} ₽ × {item.quantity}
                                                </p>
                                                <div className="flex items-center mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 border rounded-l"
                                                    >
                                                        <BiMinus className="w-4 h-4" />
                                                    </button>
                                                    <span className="px-3 py-1 border-t border-b text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 border rounded-r"
                                                    >
                                                        <BiPlus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="border-t p-4">
                                <div className="flex justify-between mb-4">
                                    <span>Итого:</span>
                                    <span className="font-semibold">{totalPrice.toLocaleString()} ₽</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={clearCart}
                                        className="flex-1 py-2 border border-gray-300 rounded hover:bg-gray-100"
                                    >
                                        Очистить
                                    </button>
                                    <button
                                        onClick={() => {
                                            alert('Заказ оформлен!');
                                            clearCart();
                                            closeCart();
                                        }}
                                        className="flex-1 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                    >
                                        Оформить
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartModal;
