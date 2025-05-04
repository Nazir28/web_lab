'use client';

import { LoginForm, RegisterForm } from '@/widget/auth';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-[800px] flex items-center justify-center ">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <div className="text-6xl flex justify-center mb-3">
                    <FaRegUserCircle width={124} height={124} />
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Вход' : 'Регистрация'}</h1>
                {isLogin ? <LoginForm /> : <RegisterForm />}
                <p className="text-center mt-4 text-sm">
                    {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
                    <button className="text-blue-500 hover:underline" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Зарегистрируйтесь' : 'Войти'}
                    </button>
                </p>
            </div>
        </div>
    );
}
