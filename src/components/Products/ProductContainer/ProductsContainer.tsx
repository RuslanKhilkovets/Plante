import { FC, useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import clsx from 'clsx';

import { Button } from '@mui/base';

import ProductItem from "../ProductItem/ProductItem";

import { TProductItem } from "../../../types/IProductItem";
import IProductsContainerProps from "../../../types/IProductsContainerProps";
import getClassName from "../../../helpers/getClassNameByProductsType";

import cl from "./ProductsContainer.module.scss";


const ProductsContainer: FC<IProductsContainerProps> = ({ products, title, subtitle, type }) => {
    const splideRef = useRef<Splide>(null);
    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

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

        const updateButtonStates = () => {
            if (splide) {
                setIsPrevDisabled(splide.index === 0);
                setIsNextDisabled(splide.index === splide.length - splide.options.perPage);
            }
        };

        if (splide && prevButton && nextButton) {
            splide.on('mounted move', updateButtonStates);
            prevButton.addEventListener('click', () => splide.go('<'));
            nextButton.addEventListener('click', () => splide.go('>'));

            updateButtonStates();

            return () => {
                splide.off('mounted move', updateButtonStates);
                prevButton.removeEventListener('click', () => splide.go('<'));
                nextButton.removeEventListener('click', () => splide.go('>'));
            };
        }
    }, []);

    return (
        !!products && products?.length !== 0
        &&
        <div className="global-container">
            <section className={cl["products"]}>
                <div className={cl["products__heading"]}>
                    <div className={cl["products__titles"]}>
                        <p className={cl["products__title"]}>{title}</p>
                        {
                            subtitle
                            &&
                            <p className={clsx(cl["products__subtitle"], cl[getClassName(type)])}>{subtitle}</p>
                        }
                    </div>
                    <div className={cl["products__navs"]}>
                        <Button 
                            ref={prevButtonRef} 
                            className={clsx(cl["products__nav"], cl["products__nav_prev"])}
                            disabled={isPrevDisabled}
                        >
                        </Button>
                        <Button 
                            ref={nextButtonRef} 
                            className={clsx(cl["products__nav"], cl["products__nav_next"])}
                            disabled={isNextDisabled}
                        >
                        </Button>
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
