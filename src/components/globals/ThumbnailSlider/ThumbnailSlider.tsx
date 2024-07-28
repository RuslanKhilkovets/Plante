import React, { useRef, useEffect } from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import "./ThumbnailSlider.scss";

import IThumbnailSlider from "../../../types/IThumbnailSlider";



const ThumbnailSlider: React.FC<IThumbnailSlider> = ({ children, mainSliderRef }) => {
    const thumbnailSliderRef = useRef<Splide>(null);

    const thumbnailSettings = {
        isNavigation: true,
        gap: "1rem",
        focus: 'center',
        pagination: false,
        cover: true,
        arrows: false,
        drag: false,
    };

    useEffect(() => {
        if (mainSliderRef.current && thumbnailSliderRef.current) {
            const mainSlider = mainSliderRef.current.splide;
            const thumbnailSlider = thumbnailSliderRef.current.splide;

            mainSlider.sync(thumbnailSlider);
        }
    }, [mainSliderRef]);

    return (
        <div className="slider-thumbnails">
            <Splide ref={thumbnailSliderRef} options={thumbnailSettings}>
                {React.Children.map(children, (child, index) => (
                    <SplideSlide key={index} className="thumbnail-slide">
                        {child}
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ThumbnailSlider;