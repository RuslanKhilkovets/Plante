import React, { FC, useRef, useEffect } from "react";
import { Button } from '@mui/base';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import cl from "./ProductsContainer.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import clsx from 'clsx';
import { TProductItem } from "../../../types/IProductItem";
import getClassName from "../../../helpers/getClassNameByProductsType";
import IProductsContainerProps from "../../../types/IProductsContainerProps";

const ProductsContainer: FC<IProductsContainerProps> = ({ products, title, subtitle, type }) => {
    const splideRef = useRef<Splide>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    const settings = {
        perPage: 4,
        perMove: 1,
        pagination: false,
        arrows: false, 
        gap: "3.5rem"
    };

    useEffect(() => {
        const splide = splideRef.current?.splide;
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        if (splide && prevButton && nextButton) {
            prevButton.addEventListener('click', () => splide.go('<'));
            nextButton.addEventListener('click', () => splide.go('>'));

            return () => {
                prevButton.removeEventListener('click', () => splide.go('<'));
                nextButton.removeEventListener('click', () => splide.go('>'));
            };
        }
    }, []);

    return (
        <div className="global-container">
            <section className={cl["products"]}>
                <div className={cl["products__heading"]}>
                    <div className={cl["products__titles"]}>
                        <p className={cl["products__title"]}>{title}</p>
                        <p className={clsx(cl["products__subtitle"], cl[getClassName(type)])}>{subtitle}</p>
                    </div>
                    <div className={cl["products__navs"]}>
                        <Button ref={prevButtonRef} className={clsx(cl["products__nav"], cl["products__nav_prev"])}></Button>
                        <Button ref={nextButtonRef} className={clsx(cl["products__nav"], cl["products__nav_next"])}></Button>
                    </div>
                </div>
                <Splide ref={splideRef} className={cl["products__slider"]} options={settings}>
                    {products?.map((product: TProductItem, index: number) => (
                        <SplideSlide key={index} className={cl["products__slider_item"]}>
                            <ProductItem product={product} />
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </div>
    );
};

export default ProductsContainer;
