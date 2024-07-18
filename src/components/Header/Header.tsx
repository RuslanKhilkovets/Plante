import { useState } from 'react';
import * as React from 'react';

import clsx from 'clsx';

import { Button } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import ConnectModal from '../ConnectModal/ConnectModal';
import CustomInput from '../StyledComponents/CustomInput';
import CustomLink from '../StyledComponents/CustomLink';
import Logo from '../Logo/Logo';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import Overlay from '../Overlay/Overlay';

import navbarLinks from '../../constants/navbarLinks';

import personIcon from "../../icons/person.svg";
import likesIcon from "../../icons/like.svg";
import cartIcon from "../../icons/cart.svg";

import cl from "./Header.module.scss";
import "../../fonts/index.css";
import { IconButton } from '@mui/material';


const Header = () => {
    const [searchPrompt, setSearchPrompt] = useState<string>('');
    const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);    
    const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
  
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setSearchPrompt(value);
    }
    
    return (
        <>
            <header className={cl.header}>
                <div className="global-container">
                    <div className={cl.navbar}>
                        <ul className={cl.navbar__list}>
                            {navbarLinks.map(link => {
                                return (
                                    <CustomLink key={link.id} to={link.to} className={cl.navbar__link}>{link.text}</CustomLink>
                                )
                            })}
                        </ul>
                        <div className={cl.navbar__contacts}>
                            <div className={cl.navbar__phones}></div>
                            <Button className={clsx(cl.navbar__connect,  cl.navbar__link)} onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}>
                                Зворотній зв’язок
                            </Button>
                        </div>
                    </div>
                    <div className={cl["header-actions"]}>
                        <Logo className={cl["header-actions__logo"]}/>
                        <Button 
                            className={clsx(cl['header-actions__catalog'], {
                                [cl['header-actions__catalog_active']]: isCatalogOpen
                            })}                            
                            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                        >
                            {
                                isCatalogOpen ?
                                <CloseIcon /> :
                                <MenuIcon style={{ transform: "scale(1.1, 1.5)"}}/>
                            }
                            <p className={cl["header-actions__catalog_title"]}>Каталог</p>
                        </Button>

                        <CustomInput
                            type="text" 
                            placeholder='Я шукаю...' 
                            className={clsx(cl["header-actions__search_input"], cl["header-actions__search"])}                            
                            value={searchPrompt} 
                            onChange={onSearchChange}
                            endAdornment={<Button className={cl["header-actions__search_btn"]}></Button>}
                        />

                        <div className={cl["header-actions__icons"]}>

                            <IconButton>
                                <img
                                    src={ personIcon }
                                />
                            </IconButton>
                            <IconButton>
                                <img
                                    src={ likesIcon }
                                />
                            </IconButton>
                            <IconButton>
                                <img
                                    src={ cartIcon }
                                />
                            </IconButton>
                            
                        </div>
                    </div>
                </div>

                <CatalogMenu
                    visible={isCatalogOpen}
                    active={isCatalogOpen} 
                    isHeaderMenu={true}
                    setActive={setIsCatalogOpen} 
                />       

            </header>
            <ConnectModal 
                open={isConnectModalOpen} 
                onClose={() => setIsConnectModalOpen(false)}
            />
        </>
    );
};

export default Header;