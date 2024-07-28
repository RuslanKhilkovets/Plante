import clsx from 'clsx';
import { SplideSlide } from '@splidejs/react-splide';

import CustomSlider from '../../UI/Slider/CustomSlider';
import { FC } from 'react';


const ItemSlider: FC<{ slides: string[] }> = ( { slides } ) => {
    return (
        <CustomSlider thumbnails>
            {slides.map(slide => (
                <SplideSlide key={slide} className={clsx("slide")} style={{
                    backgroundImage: `url(${slide ? slide : "https://github.com/RuslanKhilkovets/Plante/blob/main/src/icons/empty.png"})`,
                }}>
                </SplideSlide>
            ))}
        </CustomSlider> 
    );
};

export default ItemSlider;
