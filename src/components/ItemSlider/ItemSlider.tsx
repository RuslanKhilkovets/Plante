import clsx from 'clsx';
import CustomSlider from '../StyledComponents/CustomSlider';
import { SplideSlide } from '@splidejs/react-splide';

const slides = [
    { id: 1, img: null, thumbnail: null },
    { id: 2, img: null, thumbnail: null },
    { id: 3, img: null, thumbnail: null },
];

const ItemSlider = () => {
    return (
        <CustomSlider thumbnails>
            {slides.map(slide => (
                <SplideSlide key={slide.id} className={clsx("slide")} style={{
                    backgroundImage: `url(${slide.img !== null ? slide.img : "../../icons/empty.png"})`,
                }}>
                </SplideSlide>
            ))}
        </CustomSlider> 
    );
};

export default ItemSlider;
