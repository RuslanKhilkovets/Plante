import { FC } from "react";
import clsx from 'clsx';

import { SplideSlide } from '@splidejs/react-splide';

import CustomSlider from "../StyledComponents/CustomSlider";

const ProductsSlider: FC = () => {
    
    return (
        <CustomSlider>
            <SplideSlide className={clsx("slider__slide", "slide")} style={{
                backgroundImage: `url("/img/main-slide-3.png")`,
            }}>
                <div className={"slide__heading"}
                >
                    <p className={"slide__title"}>Вирощуй своє майбутнє</p>
                    <p className={"slide__subtitle"}>вибери найкращі насіння для свого городу тут!</p>
                </div>
            </SplideSlide>
            <SplideSlide className={clsx("slider__slide", "slide")} style={{
                backgroundImage: `url("/img/main-slide-2.png")`,
            }}>
                <div className={"slide__heading"}>
                    <p className={"slide__title"}>Ваша земля, ваші правила!</p>
                    <p className={"slide__subtitle"}>Великий вибір якісного насіння за роздрібними цінами</p>
                </div>
            </SplideSlide>
            <SplideSlide className={clsx("slider__slide", "slide")} style={{
                backgroundImage: `url("/img/main-slide-1.png")`,
            }}>
                <div className={"slide__heading"}>
                    <p className={"slide__title"}>Вирощуй своє майбутнє</p>
                    <p className={"slide__subtitle"}>вибери найкращі насіння для свого городу тут!</p>
                </div>
            </SplideSlide>
        </CustomSlider> 
    );
};
  
export default ProductsSlider;