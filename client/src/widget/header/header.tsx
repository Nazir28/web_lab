'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { useCart } from '../cart';
import { useAuth } from '../auth';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

export const Header = () => {
    const { totalItems, openCart } = useCart();
    const { isAuthenticated, logout } = useAuth();
    return (
        <header className="bg-gray-00 py-4">
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
                    {isAuthenticated && (
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
                    )}

                    <li className="text-xl hover:text-indigo-600">
                        {isAuthenticated ? (
                            <button
                                className=" bg-red-700 rounded-md text-white p-2 cursor-pointer flex items-center gap-2"
                                onClick={logout}
                            >
                                <BiLogOut className="w-6 h-6" />
                            </button>
                        ) : (
                            <Link href={'/auth'}>Вход</Link>
                        )}
                    </li>
                </ul>
            </div>
        </header>
    );
};
