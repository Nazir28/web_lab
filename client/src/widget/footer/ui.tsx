import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-amber-900 text-white py-8 mt-12">
            <div className="container  max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Логотип и контакты */}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Диаманд</h3>
                        <p className="text-amber-200">Ювелирные украшения премиум-класса</p>
                    </div>

                    {/* Копирайт и права */}
                    <div className="flex items-center">
                        <span>© 2025, ООО «Диаманд». Все права защищены.</span>
                    </div>
                </div>

                {/* Дополнительная информация (опционально) */}
                <div className="mt-6 pt-6 border-t border-amber-800 text-center text-sm text-amber-300">
                    <p>Москва, ул. Тверская, 18. Телефон: +7 (495) 123-45-67</p>
                </div>
            </div>
        </footer>
    );
};
