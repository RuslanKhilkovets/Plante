import { FC, useState } from 'react';
import clsx from 'clsx';

import { Button } from '@mui/base';

import CustomLink from '../StyledComponents/CustomLink';
import ConnectModal from '../ConnectModal/ConnectModal';
import Overlay from '../Overlay/Overlay';

import IMenuItem from '../../types/IMenuItem';
import ICatalogMenuProps from '../../types/ICatalogMenuProps';
import navbarLinks from '../../constants/navbarLinks';
import catalogMenuItems from '../../constants/catalogMenuItems';
import PATHS from '../../router/paths';

import cl from "./CatalogMenu.module.scss";


const CatalogMenu: FC<ICatalogMenuProps> = ({ active, setActive, visible, isHeaderMenu }) => {
    const [activeMenuItem, setActiveMenuItem] = useState<IMenuItem | null>(null);
    const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);    

    return (
        <>
            {
                !!visible 
                &&
                <div className={
                    clsx(cl["menu-container"], {
                        [cl["header-menu"]]: isHeaderMenu
                    })}
                    // onMouseLeave={() => setActiveMenuItem(null)}
                >
                    <div className={cl["menu-wrapper"]}>
                        <div className={cl["menu"]}>
                            <ul className={cl["menu__list"]}>
                                {
                                    catalogMenuItems.map((item: any) => {
                                        const url = `${PATHS.CATALOG}?category=${item.to || ""}`;
        
                                        return (
                                                <CustomLink 
                                                    to={url} 
                                                    key={item.id}
                                                    className={cl.menu__item}                                         
                                                    onMouseOver={() => setActiveMenuItem(item)}
                                                >
                                                    <p className={clsx(cl.menu__item_icon, "material-symbols-outlined")}>{item.iconName}</p>
                                                    <p className={cl.menu__text}>{item.title}</p>
                                                </CustomLink>
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
                                                <CustomLink 
                                                    to={link.to} 
                                                    key={link.id}
                                                    className={cl.navbar__link}
                                                >
                                                        {link.text}
                                                </CustomLink>
                                            )
                                        })}
                                    </ul>
                                    <div className={cl["menu-navbar__links"]}>
                                        <a href='tel:(067) 282-52-44' className={cl["menu-navbar__link"]}>(067) 282-52-44</a>
                                        <a href='tel:(067) 282-52-44' className={cl["menu-navbar__link"]}>(067) 282-52-44</a>
                                        <Button className={clsx(cl["menu-navbar__connect"],  cl["menu-navbar__link"])} onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}>Зворотній зв’язок</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            activeMenuItem !== null
                            &&
                            <div className={cl["menu-items"]}>
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
                                                    <CustomLink 
                                                        to={item.to} 
                                                        key={item.id}
                                                        className={cl["menu-items__item_text"]}
                                                    >
                                                        {item.text}
                                                    </CustomLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            }
            <Overlay active={active} onClick={() => setActive(false)}/>

            <ConnectModal open={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)}/>
        </>
    );
};

export default CatalogMenu;