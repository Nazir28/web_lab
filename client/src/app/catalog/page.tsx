'use client';
import { FaSearch, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CartItem, useCart } from '@/widget/cart';
import { useAuth } from '@/widget/auth';
import { useRouter } from 'next/navigation';

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    material: string;
    weight: number;
}

const categories = ['Все', 'Кольца', 'Серьги', 'Подвески', 'Браслеты', 'Колье'];

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = 'http://localhost:2000/api/products';
                if (searchTerm || selectedCategory !== 'Все') {
                    url += `?search=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(selectedCategory)}`;
                }

                const response = await fetch(url);
                if (!response.ok) throw new Error('Ошибка загрузки данных');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchTerm, selectedCategory]);

    const { addToCart, openCart } = useCart();

    const handleAddToCart = (product: CartItem) => {
        if (isAuthenticated) {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
            });
            openCart();
        } else {
            router.push('/auth');
        }
    };

    if (loading) return <div className="text-center py-20">Загрузка...</div>;
    if (error) return <div className="text-red-500 text-center py-20">{error}</div>;

    return (
        <main className="max-w-[1200px] mx-auto mt-4">
            <div className="mb-8 bg-white p-4 rounded-lg shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="relative w-full md:w-64">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm ${
                                    category === selectedCategory
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors">
                                <FaHeart className="text-amber-600" />
                            </button>
                        </div>

                        <div className="p-4">
                            <span className="text-xs text-amber-700">{product.category}</span>
                            <h3 className="text-lg font-semibold mt-1 mb-2 min-h-[50px]">{product.name}</h3>
                            <p className="text-gray-800 font-bold mb-3">{product.price.toLocaleString()} ₽</p>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                            <div className="flex justify-between items-center">
                                <Link
                                    href={`/product/${product.id}`}
                                    className="text-amber-700 hover:text-amber-900 font-medium text-sm"
                                >
                                    Подробнее →
                                </Link>
                                <button
                                    onClick={() =>
                                        handleAddToCart({
                                            id: product.id.toString(),
                                            name: product.name,
                                            price: product.price,
                                            image: product.image,
                                            quantity: 0,
                                        })
                                    }
                                    className="bg-amber-700 hover:bg-amber-800 text-white py-1 px-4 rounded-md flex items-center text-sm"
                                >
                                    <FaShoppingCart className="mr-2" /> В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {products.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                    Товары не найдены. Попробуйте изменить параметры поиска.
                </div>
            )}
        </main>
    );
}
