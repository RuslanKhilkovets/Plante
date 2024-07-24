import { FC, useState } from 'react';

import ProductsSlider from '../ProductsSlider/ProductsSlider';
import CatalogMenu from '../CatalogMenu/CatalogMenu';

import cl from "./SliderPreview.module.scss"

const SliderPreview: FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

    return (
        <div className="global-container-no-padding">
            <div className={cl["slider-preview"]}>
                <div 
                    className={cl["slider-preview__menu"]}
                    onMouseOver={() => setIsMenuActive(false)} 
                >

                    <CatalogMenu 
                        visible={true}
                        active={isMenuActive} 
                        setActive={setIsMenuActive}
                    />
                </div>
                
                <ProductsSlider/>
            </div>
        </div>  
    );
};

export default SliderPreview;