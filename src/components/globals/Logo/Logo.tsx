import { FC } from "react";
import { Link } from "react-router-dom";

import AppLogo from "../../../icons/logo.svg";

import PATHS from "../../../router/paths";
import ILogoProps from "../../../types/ILogoProps";


const Logo: FC<ILogoProps> = ( {className} ) => {

    return (
        <Link
            to={ PATHS.MAIN_PAGE }
        >
            <img 
                src={ AppLogo } 
                height={ 56 }
                width={ 100 }
                className={ className }
            />
        </Link>
    );
};

export default Logo;