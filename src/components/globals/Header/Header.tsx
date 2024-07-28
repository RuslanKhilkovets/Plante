import { useState } from 'react';
import * as React from 'react';

import clsx from 'clsx';

import { Button } from '@mui/base';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PhonesMenu from '../PhonesMenu/PhonesMenu';


import ConnectModal from '../ConnectModal/ConnectModal';
import CustomInput from '../../UI/Input/CustomInput';
import CustomLink from '../../UI/Link/CustomLink';
import Logo from '../Logo/Logo';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import Cart from '../Cart/Cart';

import { useAppSelector } from '../../../hooks/redux';

import navbarLinks from '../../../constants/navbarLinks';

import personIcon from "../../../icons/person.svg";
import likesIcon from "../../../icons/like.svg";
import cartIcon from "../../../icons/cart.svg";

import cl from "./Header.module.scss";
import "../../../fonts/index.css";


const Header = () => {
    const { items: cart } = useAppSelector(state => state.cartReducer)

    const [searchPrompt, setSearchPrompt] = useState<string>('');
    const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);    
    const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);


    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setSearchPrompt(value);
    }
    
    const calculateCartCount = () => cart.reduce((prev, next) => {
        console.log(next.itemCount)
        return prev + next.itemCount;
    }, 0)
    
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
                            <PhonesMenu />

                            <Button 
                                className={clsx(cl.navbar__connect, cl.navbar__link)} 
                                onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}
                            >
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

                            <IconButton className={cl["header-actions__icon"]}>
                                <img
                                    src={ personIcon }
                                />
                            </IconButton>
                            <IconButton className={cl["header-actions__icon"]}>
                                <img
                                    src={ likesIcon }
                                />
                            </IconButton>
                            <IconButton
                                onClick={() => setIsCartOpen(!isCartOpen)}
                                aria-count={ calculateCartCount() }
                                className={clsx({
                                    [cl["cart"]]: cart.length > 0
                                })}
                            >
                                <img
                                    src={ cartIcon }
                                />
                            </IconButton>
                            
                        </div>
                    </div>
                </div>
                <div className="global-container-no-padding">
                    <CatalogMenu
                        visible={isCatalogOpen}
                        active={isCatalogOpen} 
                        isHeaderMenu={true}
                        setActive={setIsCatalogOpen} 
                    />     
                </div>

            </header>
            <ConnectModal 
                open={isConnectModalOpen} 
                onClose={() => setIsConnectModalOpen(false)}
            />
            <Cart
                open={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    );
};

export default Header;