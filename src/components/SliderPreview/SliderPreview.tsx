import { FC, useState } from 'react';
import CustomSlider from '../Slider/CustomSlider';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import cl from "./SliderPreview.module.scss"
import Overlay from '../Overlay/Overlay';

const SliderPreview: FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

    return (
        <div className="global-container-no-padding">
            <div className={cl["slider-preview"]}>
                <div 
                    className={cl["slider-preview__menu"]}
                    onMouseOver={() => setIsMenuActive(true)} 
                >
                    <CatalogMenu 
                        visible={true}
                        active={isMenuActive} 
                        setActive={setIsMenuActive}
                    />
                </div>

                <CustomSlider/>
            </div>
        </div>  
    );
};

export default SliderPreview;