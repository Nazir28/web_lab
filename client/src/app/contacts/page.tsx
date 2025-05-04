'use client';

import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contacts() {
    return (
        <main className="max-w-[1200px] mx-auto mt-4">
            <section className="my-10">
                <h2 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Адрес
                </h2>

                <div className="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-4">Контактная информация</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaPhone className="text-amber-600 mt-1 mr-3" />
                                <span>+7 (495) 123-45-67</span>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-amber-600 mt-1 mr-3" />
                                <span>155550, Ивановская обл., г. Приволжск, ул.Фабричная, д. 9</span>
                            </li>
                            <li className="flex items-start">
                                <FaEnvelope className="text-amber-600 mt-1 mr-3" />
                                <span>info@diamond.ru</span>
                            </li>
                        </ul>
                        <div className="mt-10">
                            <h3 className="text-lg font-medium text-gray-800 mb-4">Режим работы</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Пн-Пт:</span>
                                    <span>10:00 - 20:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Сб-Вс:</span>
                                    <span>11:00 - 19:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2150.74666319511!2d41.298868177540996!3d57.380409973729954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414d58b3d9b4d669%3A0xe7711996023dfbc5!2z0KTQsNCx0YDQuNGH0L3QsNGPINGD0LsuLCA5LCDQn9GA0LjQstC-0LvQttGB0LosINCY0LLQsNC90L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTU1NTUw!5e0!3m2!1sru!2sde!4v1745667344986!5m2!1sru!2sde"
                        height="450"
                        style={{ border: 0 }}
                        className="w-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center">
                    <FaPaperPlane className="mr-2" /> Напишите нам
                </h2>

                <form className="bg-white p-6 rounded-lg shadow-md">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2">
                                Имя *
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="block text-gray-700 mb-2">
                            Тема
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 mb-2">
                            Сообщение *
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded text-amber-600" required />
                            <span className="ml-2 text-gray-700">Я согласен на обработку персональных данных</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md transition-colors"
                    >
                        Отправить
                    </button>
                </form>
            </section>
        </main>
    );
}
