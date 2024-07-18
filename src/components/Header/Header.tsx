import { useState } from 'react';
import * as React from 'react';

import clsx from 'clsx';

import { Button } from '@mui/base';

import ConnectModal from '../ConnectModal/ConnectModal';
import CustomInput from '../StyledComponents/CustomInput';
import CustomLink from '../StyledComponents/CustomLink';
import Logo from '../Logo/Logo';

import navbarLinks from '../../constants/navbarLinks';

import cl from "./Header.module.scss";
import "../../fonts/index.css";
import SliderMenu from '../SliderMenu/SliderMenu';
import Overlay from '../Overlay/Overlay';


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
                            <Button className={cl.navbar__connect + " " + cl.navbar__link} onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}>Зворотній зв’язок</Button>
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
                            <div 
                                className={clsx(cl["header-actions__catalog_button"], {
                                    [cl["header-actions__catalog_button_active"]]: isCatalogOpen
                                })}
                            >
                            </div>
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
                            <Button className={cl["header-actions__icon"]}></Button>
                            <Button className={cl["header-actions__icon"]}></Button>
                            <Button className={cl["header-actions__icon"]}></Button>
                        </div>
                    </div>
                </div>

                <Overlay active={isCatalogOpen} onClick={() => setIsCatalogOpen(false)} />

                <SliderMenu 
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