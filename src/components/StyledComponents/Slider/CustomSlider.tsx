import  "./CustomSlider.scss";
import clsx from 'clsx';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const CustomSlider = (  ) => {
    const settings = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
        gap: "1rem"
    };
  
    return (
            <div className="slider">

                <Splide options={settings}>
                    <SplideSlide className={clsx("slider__slide", "slide")}>
                        <div className={"slide__heading"}>
                            <p className={"slide__title"}>Вирощуй своє майбутнє</p>
                            <p className={"slide__subtitle"}>вибери найкращі насіння для свого городу тут!</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={clsx("slider__slide", "slide")}>
                        <div className={"slide__heading"}>
                            <p className={"slide__title"}>Ваша земля, ваші правила!</p>
                            <p className={"slide__subtitle"}>Великий вибір якісного насіння за роздрібними цінами</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide className={clsx("slider__slide", "slide")}>
                        <div className={"slide__heading"}>
                            <p className={"slide__title"}>Ваша земля, ваші правила!</p>
                            <p className={"slide__subtitle"}>Великий вибір якісного насіння за роздрібними цінами</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>      
    );
  };
  
export default CustomSlider;