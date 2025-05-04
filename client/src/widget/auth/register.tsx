'use client';

import axios from 'axios';
import { useState } from 'react';
import { useAuth } from './context';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:2000/api/user/register', { email, password });
            login({ email, id: res.data._id });
            router.push('/');
        } catch (err) {
            console.log(err);
            alert(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                className="w-full px-4 py-2 border rounded-xl"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
                Зарегистрироваться
            </button>
        </form>
    );
};
