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
                <>
                    <div className={cl["catalog-overlay"]}></div>

                    <div className={cl["menu-container"]}>
                        <div className={cl.menu}>
                            <ul className={cl.menu__list}>
                                {
                                    menuItems !== null
                                    &&
                                    menuItems.map((item: any) => {
                                        return (
                                            <li className={cl.menu__item} 
                                                onMouseOver={() => setActiveMenuItem(item)}
                                            >
                                                <p className={clsx(cl.menu__item_icon, "material-symbols-outlined")}>{item.iconName}</p>
                                                <p className={cl.menu__text}>{item.title}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={cl["menu-navbar"]}>
                                <div className={cl["menu-navbar__header"]}>
                                    <div className={cl["menu-navbar__header"]}>
                                        <div className={cl["menu-navbar__header_item"]}>
                                            <Button className={cl["menu-navbar__header_item_button"]}></Button>
                                            <p className={cl["menu-navbar__header_item_title"]}>Особисті дані</p>
                                        </div>
                                        <div className={cl["menu-navbar__header_item"]}>
                                            <Button className={cl["menu-navbar__header_item_button"]}></Button>
                                            <p className={cl["menu-navbar__header_item_title"]}>Вибране</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cl["menu-navbar__container"]}>
                                    <ul className={cl["menu-navbar__list"]}>
                                        {navbarLinks.map(link => {
                                            return (
                                                <CustomLink to={link.to} className={cl.navbar__link}>{link.text}</CustomLink>
                                            )
                                        })}
                                    </ul>
                                    <div className={cl["menu-navbar__links"]}>
                                        <a href='tel:(067) 282-52-44' className={cl["menu-navbar__link"]}>(067) 282-52-44</a>
                                        <a href='tel:(067) 282-52-44' className={cl["menu-navbar__link"]}>(067) 282-52-44</a>
                                        <Button className={clsx(cl.navbar__connect,  cl.navbar__link)} onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}>Зворотній зв’язок</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            activeMenuItem !== null
                            &&
                            <div className={cl["menu-items"]}
                                onMouseLeave={() => setActiveMenuItem(null)}   
                            >
                                <div className={cl["menu-items__header"]}>
                                    <p className={cl["menu-items__header--title"]}>{activeMenuItem.title}</p>
                                    <Button className={cl["menu-items__header--close-icon"]} onClick={() => setActiveMenuItem(null)}></Button>
                                </div>
                                <ul className={cl["menu-items__list"]}>
                                    <p className={`${cl["menu-items__item_text"]} ${cl["menu-items__item_title"]}`}>{activeMenuItem.title}</p>
                                    {
                                        activeMenuItem?.items.map((item: any) => {
                                            
                                            return (
                                                <li className={cl[`menu-items__item`]}>
                                                    <CustomLink to={item.to} className={cl["menu-items__item_text"]}>{item.text}</CustomLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
    
                            </div>
                        }
                    </div>
                </>                 
            }
            </header>

            <ConnectModal open={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)}/>
        </>
    );
};

export default Header;