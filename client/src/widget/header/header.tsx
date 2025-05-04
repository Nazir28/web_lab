'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useCart } from '../cart';

export const Header = () => {
    const { totalItems, openCart } = useCart();

    return (
        <header className="bg-slate-300 py-4">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                <Link href={'/'} className="cursor-pointer">
                    <Image
                        src={'https://diamant-online.ru/themes/diamant/img/modern-logotype.svg'}
                        width={190}
                        height={60}
                        alt="logo"
                    />
                </Link>
                <ul className="flex justify-between items-center gap-4">
                    <li className="text-xl hover:text-indigo-600">
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <li className="text-xl hover:text-indigo-600">
                        <Link href={'/catalog'}>Каталог</Link>
                    </li>
                    <li className="text-xl hover:text-indigo-600">
                        <Link href={'/contacts'}>Контакты</Link>
                    </li>
                    <li className="text-xl hover:text-indigo-600">
                        <button
                            onClick={openCart}
                            className="relative p-2 text-gray-700 hover:text-indigo-600 cursor-pointer"
                            aria-label="Корзина"
                        >
                            <CgShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};
