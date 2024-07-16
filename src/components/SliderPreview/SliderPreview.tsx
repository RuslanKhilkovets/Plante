import { FC, useState } from 'react';
import CustomSlider from '../Slider/CustomSlider';
import SliderMenu from '../SliderMenu/SliderMenu';
import cl from "./SliderPreview.module.scss"

const SliderPreview: FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

    return (
        <>
            {
                isMenuActive
                &&
                <div className={cl["catalog-overlay"]} onClick={() => setIsMenuActive(false)}></div>
            }

            <div className="global-container-no-padding">
                <div className={cl["slider-preview"]}>
                    <div 
                        className={cl["slider-preview__menu"]}
                        onMouseOver={() => setIsMenuActive(true)} 
                        onMouseLeave={() => setIsMenuActive(false)} 
                    >
                        <SliderMenu active={isMenuActive} setActive={setIsMenuActive}/>
                    </div>

                    <CustomSlider/>
                </div>
            </div>  
        </>     
    );
};

export default SliderPreview;