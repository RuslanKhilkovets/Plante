import clsx from 'clsx';
import CustomSlider from '../StyledComponents/CustomSlider';
import { SplideSlide } from '@splidejs/react-splide';

const slides = [
    { id: 1, img: '/img/main-slide-3.png', thumbnail: '/img/thumb-slide-3.png' },
    { id: 2, img: '/img/main-slide-2.png', thumbnail: '/img/thumb-slide-2.png' },
];

const ItemSlider = () => {
    return (
        <CustomSlider thumbnails>
            {slides.map(slide => (
                <SplideSlide key={slide.id} className={clsx("slide")} style={{
                    backgroundImage: `url(${slide.img})`,
                }}>
                </SplideSlide>
            ))}
        </CustomSlider> 
    );
};

export default ItemSlider;
