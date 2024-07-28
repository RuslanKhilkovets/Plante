import { FC } from "react";

import IOverlayProps from "../../../types/IOverlayProps";

import cl from "./Overlay.module.scss"


const Overlay: FC<IOverlayProps> = ( { active, onClick }) => {
    
    return (
        active
        &&
        <div 
            className={cl["overlay"]}
            onClick={onClick}
        ></div>
    );
};

export default Overlay;