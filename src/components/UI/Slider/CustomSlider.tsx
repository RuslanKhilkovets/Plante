import React, { FC, useRef } from "react";
import { Splide, SplideProps } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ThumbnailSlider from "../../globals/ThumbnailSlider/ThumbnailSlider";
import "./CustomSlider.scss";

interface ICustomSlider {
    children: React.ReactNode;
    options?: SplideProps;
    thumbnails?: boolean;
}

const CustomSlider: FC<ICustomSlider> = ({ children, options, thumbnails }) => {
    const mainSliderRef = useRef<Splide>(null);

    const settings = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
        gap: "1rem",
        ...options,
    };

    return (
        <>
            <div className="slider">
                <Splide ref={mainSliderRef} options={settings}>
                    {children}
                </Splide>
            </div>
            {thumbnails && <ThumbnailSlider mainSliderRef={mainSliderRef}>{children}</ThumbnailSlider>}
        </>
    );
};

export default CustomSlider;
