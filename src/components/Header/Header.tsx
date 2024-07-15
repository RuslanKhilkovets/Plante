import { useEffect, useState } from 'react';
import * as React from 'react';

import axios from 'axios';
import clsx from 'clsx';

import { Button } from '@mui/base';

import ConnectModal from '../ConnectModal/ConnectModal';
import CustomInput from '../StyledComponents/CustomInput';
import CustomLink from '../StyledComponents/CustomLink';
import Logo from '../Logo/Logo';

import navbarLinks from '../../constants/navbarLinks';

import IMenuItem from '../../types/IMenuItem';

import cl from "./Header.module.scss";
import "../../fonts/index.css";
import SliderMenu from '../SliderMenu/SliderMenu';


const Header = () => {
    const [searchPrompt, setSearchPrompt] = useState<string>('');
    const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);    
    const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
    const [menuItems, setMenuItems] = useState<IMenuItem[] | null>(null);
    const [activeMenuItem, setActiveMenuItem] = useState<IMenuItem | null>(null);
  
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setSearchPrompt(value);
    }
  
    useEffect(() => {
      const getMenuItems = async () => {
        try {
          const response = await axios.get<IMenuItem[]>("http://localhost:5000/menuItems");

          setMenuItems(response.data);
        } catch (error) {
          console.error("Error fetching menu items:", error);
        }
      }
  
      getMenuItems();
    }, []);

    return (
        <>
            <header className={cl.header + " header"}>
                <div className="global-container">
                    <div className={cl.navbar}>
                        <ul className={cl.navbar__list}>
                            {navbarLinks.map(link => {
                                return (
                                    <CustomLink to={link.to} className={cl.navbar__link}>{link.text}</CustomLink>
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
                {
                isCatalogOpen
                &&
                <SliderMenu active={isCatalogOpen} setActive={setIsCatalogOpen}/>                
            }
            </header>

            <ConnectModal open={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)}/>
        </>
    );
};

export default Header;