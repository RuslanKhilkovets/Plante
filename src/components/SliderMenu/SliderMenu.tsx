import React, { FC, useEffect, useState } from 'react';
import IMenuItem from '../../types/IMenuItem';
import cl from "./SliderMenu.module.scss";
import axios from 'axios';
import clsx from 'clsx';
import { Button } from '@mui/base';
import CustomLink from '../StyledComponents/CustomLink';
import navbarLinks from '../../constants/navbarLinks';
import ConnectModal from '../ConnectModal/ConnectModal';
import ICustomSliderProps from '../../types/ICustomSliderProps';

const SliderMenu: FC<ICustomSliderProps> = ({ active, setActive }) => {

    const [menuItems, setMenuItems] = useState<IMenuItem[] | null>(null);
    const [activeMenuItem, setActiveMenuItem] = useState<IMenuItem | null>(null);
    const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);    

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
            <div className={
                clsx(cl["menu-container"])}
            >
                <div className={
                    clsx(cl.menu, {
                        isBurgerMenu: cl["burger-container"]

                    })}>
                    <ul className={cl["cl.menu__list"]}>
                        {
                            menuItems !== null
                            &&
                            menuItems.map((item: any) => {
                                return (
                                    <li className={cl.menu__item} 
                                        onMouseOver={() => setActiveMenuItem(item)}
                                        onMouseLeave={() => setActiveMenuItem(null)}
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
            {
                isConnectModalOpen
                &&
                <div className="catalog-overlay"></div>
            }
            <ConnectModal open={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)}/>
        </>
    );
};

export default SliderMenu;