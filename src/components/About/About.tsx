import React from 'react';

import cl from "./About.module.scss";

const About = () => {
    return (
        <div className="global-container">
            <div className={cl["about"]}>
                <div className={cl["about-text"]}>
                    <p className={cl["about-text__title"]}>
                        Про нас
                    </p>
                    <div className={cl["about-text__item"]}>
                        <p className={cl["about-text__item_title"]}>
                            Насіння овочів та квітів, саджанці дерев та кущів
                        </p>
                        <p className={cl["about-text__item_subtitle"]}>
                            Якісне насіння забезпечує гарний ріст рослин, що дає змогу підвищити очікуваний врожай. Якісне насіння є запорукою успішної роботи фермерів, дачників, садівників і городників.Ми пропонуємо оригінальне насіння з високою схожістю від кращого українського виробника.У нас можна купити насіння овочів, квітів, газонних трав, польових культур, сидератів, медоносів з доставкою. Отримати замовлене у нашому спеціалізованому інтернет-магазині насіння можна поштою або за допомогою служб доставки. Для цього потрібно зробити замовлення на сайті або по телефону.
                        </p>
                    </div>
                    <div className={cl["about-text__item"]}>
                        <p className={cl["about-text__item_title"]}>
                            Наш досвід допоможе вам обрати найкращу продукцію і отримати хороший урожай.
                        </p>
                        <p className={cl["about-text__item_subtitle"]}>
                            Продукція виробника «Plante» має зручну оригінальну упаковку з детальною інструкцією щодо використання.                
                        </p>
                    </div>
                    <div className={cl["about-text__item"]}>
                        <p className={cl["about-text__item_title"]}>
                            PLANTE - запорука високого урожаю!  
                        </p>
                    </div>
                </div>
                <div className={cl["about-experience"]}>
                    <p className={cl["about-experience__title"]}>
                        10 років успішної роботи – сотні задоволених клієнтів
                    </p>
                    <ul className={cl["about-experience__list"]}>
                        <li className={cl["about-experience__list_item"]}>
                            грамотна консультація фахівців з асортименту
                        </li>
                        <li className={cl["about-experience__list_item"]}>
                            поради практиків щодо застосування продукції
                        </li>
                        <li className={cl["about-experience__list_item"]}>
                            доставка товару кур'єрськими службами по всій Україні
                        </li>
                        <li className={cl["about-experience__list_item"]}>
                            гарантія високої якості кожного виду продукції
                        </li>
                        <li className={cl["about-experience__list_item"]}>
                            найвигідніші ціни
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;