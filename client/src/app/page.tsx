'use client';

import { TeamSlider } from '@/widget/team';

export default function Home() {
    return (
        <div className="max-w-[1200px] mx-auto mt-4">
            <section className="mb-20">
                <h2 className="text-2xl font-semibold text-amber-900 mb-6">О нас</h2>
                <div>
                    <p className="text-gray-700 mb-4">
                        История бренда Diamant началась в 2010 году, когда под этим названием открылся первый фирменный
                        ювелирный магазин. Diamant-online.ru - это не просто название, а долгие годы кропотливой работы
                        многих специалистов, которые изо дня в день создавали бренд и воплощали его в жизнь. Наши
                        сотрудники трепетно относятся к дизайну и функционалу сайта. Компания входит в холдинг
                        официальных партнеров ювелирных магазинов Diamant и «Золотой стиль». В магазинах
                        оптово-розничной продажи представлено более 36000 изделий из золота и серебра напрямую от
                        производителя. Все товары находятся на нашем складе, что дает возможность получить их в день
                        заказа. Подбор украшений для женщин, мужчин и детей с учетом их индивидуальных потребностей -
                        это огромный труд, который мы делаем с удовольствием, потому что любим свою работу и дорожим
                        своей репутацией. Специалисты отбирают каждое украшение в индивидуальном порядке, что
                        гарантирует высокое качество. У нашей компании есть собственный ОТК (отдел технического
                        контроля), где товары контролируются и проверяются дополнительно. Мы работаем для тех, кто ценит
                        время и хочет приобрести классические или оригинальные ювелирные изделия, а также необычные и
                        запоминающиеся подарки! Нам доверяют тысячи благодарных клиентов!
                    </p>
                    <p className="text-gray-700">
                        Наши клиенты — это те, кто ценит индивидуальность и стремится подчеркнуть свой стиль.
                    </p>
                    <div className="flex justify-center mt-5">
                        <iframe
                            width="846"
                            height="476"
                            src="https://www.youtube.com/embed/-5gikYw_7_Q"
                            title="Музыка ювелирных украшений"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            <section className="mb-20">
                <h2 className="text-2xl font-semibold text-amber-900 mb-6">История фирмы</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">1995</span>
                            <p>Основание компании в Москве. Первая коллекция колец и серёг.</p>
                        </li>
                        <li className="flex items-center">
                            <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">2005</span>
                            <p>Открытие бутика в Санкт-Петербурге. Начало работы с бриллиантами.</p>
                        </li>
                        <li className="flex items-center">
                            <span className="bg-amber-100 text-amber-800 rounded-full p-2 mr-4">2020</span>
                            <p>Запуск онлайн-магазина. Коллаборация с европейскими дизайнерами.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <TeamSlider />
        </div>
    );
}
