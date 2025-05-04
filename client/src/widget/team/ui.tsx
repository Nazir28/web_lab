'use client';

import React, { useState, useMemo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Member {
    name: string;
    role: string;
    bio: string;
    img: string;
}

const members: Member[] = [
    {
        name: 'Анна Соколова',
        role: 'Главный ювелир',
        bio: 'Специалист с 15-летним опытом. Автор коллекций «Золотые узоры» и «Русский авангард».',
        img: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
    },
    {
        name: 'Иван Петров',
        role: 'Менеджер по продажам',
        bio: 'Консультант VIP-клиентов. Работает в «Диаманд» с 2010 года.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c2SfLh2iDDyOg1qxEZIPeODJfQ0LNHCqJQ&s',
    },
    {
        name: 'Елена Ковалёва',
        role: 'Дизайнер украшений',
        bio: 'Выпускница Британской школы дизайна. Создаёт эксклюзивные эскизы.',
        img: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
    },
    {
        name: 'Дмитрий Волков',
        role: 'Геммолог',
        bio: 'Эксперт по драгоценным камням. Проводит сертификацию бриллиантов.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c2SfLh2iDDyOg1qxEZIPeODJfQ0LNHCqJQ&s',
    },
    {
        name: 'Ольга Белова',
        role: 'Маркетолог',
        bio: 'Разрабатывает стратегии продвижения бренда. Организатор ювелирных показов.',
        img: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
    },
    {
        name: 'Артём Жуков',
        role: 'IT-специалист',
        bio: 'Курирует работу сайта и онлайн-примерки украшений.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c2SfLh2iDDyOg1qxEZIPeODJfQ0LNHCqJQ&s',
    },
    {
        name: 'София Морозова',
        role: 'Администратор бутика',
        bio: 'Координирует работу персонала в московском филиале.',
        img: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
    },
    {
        name: 'Михаил Орлов',
        role: 'Логист',
        bio: 'Отвечает за поставки золота и камней из Швейцарии и Индии.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1c2SfLh2iDDyOg1qxEZIPeODJfQ0LNHCqJQ&s',
    },
    {
        name: 'Алиса Новикова',
        role: 'PR-менеджер',
        bio: 'Организует сотрудничество с блогерами и СМИ.',
        img: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg',
    },
];

export const TeamSlider: React.FC = () => {
    const slidesToShow = 3;
    const [currentIndex, setCurrentIndex] = useState(0);

    const groups = useMemo(() => {
        const arr: Member[][] = [];
        for (let i = 0; i < members.length; i += slidesToShow) {
            arr.push(members.slice(i, i + slidesToShow));
        }
        return arr;
    }, []);

    const totalSlides = groups.length;

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    width: `${totalSlides * 100}%`,
                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                }}
            >
                {groups.map((group, idx) => (
                    <div
                        key={idx}
                        className="flex justify-center gap-6 px-4"
                        style={{ width: `${100 / totalSlides}%` }}
                    >
                        {group.map((member) => (
                            <div
                                key={member.name}
                                className="flex-1 min-w-0 bg-white p-6 rounded-2xl shadow-md flex flex-col items-start"
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4"
                                />
                                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                                <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
                aria-label="Previous"
            >
                <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
                aria-label="Next"
            >
                <FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex justify-center mt-6 space-x-2">
                {groups.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            currentIndex === idx ? 'bg-amber-600 w-8' : 'bg-gray-300 w-2'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
