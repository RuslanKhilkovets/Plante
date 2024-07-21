import React from 'react';
import ItemPresentation from '../components/ItemPresentation/ItemPresentation';

const ItemPage = () => {

    const item = {
        id: 1,
        title: "Календула лікарська",
        url: "kalendula",
        isInStock: true,
        code: 1488,
        producer: "Plante",
        weightItems: [0.1, 0.2, 0.5, 1, 3],
        price: 3,
        description: "Календула лікарська - це сорт лікарської календули, який відзначається яскравими та різноманітними квітами зі збільшеною кількістю пелюсток та яскравими кольорами. Ця рослина відома не тільки своєю декоративністю, але і застосовується в народній медицині завдяки своїм лікарським властивостям. Зовнішній вигляд та аромат: Період цвітіння: серпень-вересень Колір квітки: помаранчевийДіаметр квітки: 2-5 см Висота рослини: 30 смКолір листя: зелений Аромат: легкий, приємний",
        category: "Лікарські культури (малий європакет)",
        weight: 0.2,
        count: 20,
    }

    return (
        <div className='global-container'>
            <ItemPresentation item={item} />
        </div>
    );
};

export default ItemPage;