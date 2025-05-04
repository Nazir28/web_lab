'use client';

import { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';
import { Product } from '../../catalog/page';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useCart } from '@/widget/cart';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { addToCart, openCart } = useCart();

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product, any>(`http://localhost:2000/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ошибка загрузки');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product === null) return;
        addToCart({
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            image: product.image,
        });
        openCart();
    };

    if (loading) return <div className="text-center py-20">Загрузка...</div>;
    if (error) return <div className="text-red-500 text-center py-20">{error}</div>;
    if (!product) return <div className="text-center py-20">Товар не найден</div>;

    return (
        <main className="max-w-[1200px] mx-auto py-20">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-6">
                    <div>
                        <div className="mb-4 h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {new Array(4).fill('').map((el, idx) => (
                                <img
                                    key={idx}
                                    src={product.image}
                                    alt={`Вариант ${product.id}`}
                                    className={`w-full h-full object-cover`}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-4">
                            <span className="text-sm text-amber-700 bg-amber-100 px-2 py-1 rounded">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                        <div className="mb-6">
                            <span className="text-4xl font-bold text-gray-900">
                                {product.price?.toLocaleString()} ₽
                            </span>
                            {product.weight && <span className="ml-2 text-gray-500">Вес: {product.weight} г</span>}
                        </div>

                        <p className="text-gray-700 mb-6">{product.description}</p>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-2">Материал:</h3>
                            <p className="text-gray-700">{product.material}</p>
                        </div>

                        <div className="flex space-x-4 mb-8">
                            <button
                                onClick={handleAddToCart}
                                className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg flex items-center font-medium transition-colors"
                            >
                                <FaShoppingCart className="mr-2" />В корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
