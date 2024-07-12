import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/base';

import ConnectModal from '../ConnectModal/ConnectModal';
import CustomInput from '../StyledComponents/CustomInput';
import Logo from '../Logo/Logo';

import PATHS from '../../router/paths';

import cl from "./Header.module.scss";
import "../../fonts/index.css";

const Header = () => {
    const [searchPrompt, setSearchPrompt] = useState<boolean>();
    const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
    const [activeMenuItem, setActiveMenuItem] = useState<any | null>(null);

    const onSearchChange = (e: any) => {
        const { value } = e.target;        
        setSearchPrompt(value);
    }

    const menuItems = [
        {
            id: 1,
            title: "Насіння овочів європакет",
            iconName: "eco"
        },
        {
            id: 2,
            title: "Насіння квітів",
            iconName: "psychiatry"
        },
        {
            id: 3,
            title: "Насіння овочів пакет гигант",
            iconName: "filter_vintage"
        },
        {
            id: 4,
            title: "Газонні трави",
            iconName: "grass"
        },
        {
            id: 5,
            title: "Кормові культури",
            iconName: "cruelty_free"
        },
        {
            id: 6,
            title: "Серія Зарубіжної селекції",
            iconName: "map"
        },
        {
            id: 7,
            title: "Серія Пропуск в світ високого врожаю інкрустоване",
            iconName: "search"
        },
        {
            id: 8,
            title: "Серія Щедра грядка (інкрусоване)",
            iconName: "volunteer_activism"
        },
    ]

    const menuListItems = [
        {
            id: 1,
            title: "Насіння овочів європакет",
            items: [
                {
                    text: "Малий європакет",
                    to: "/",
                    isTitle: true,
                },
                {
                    text: "Арахіс (малий європакет)",
                    to: "/"
                },
                {
                    text: "Баклажани (малий європак...",
                    to: "/"
                },
                {
                    text: "Буряк (малий європакет)",
                    to: "/"
                },
                {
                    text: "Диня (малий європакет)",
                    to: "/"
                },
                {
                    text: "Гарбуз (малий європакет)",
                    to: "/"
                },
                {
                    text: "Горох (малий європакет)",
                    to: "/"
                },
                {
                    text: "Кабачок (малий європакет)",
                    to: "/"
                },
                {
                    text: "Кавун (малий європакет)",
                    to: "/"
                },
                {
                    text: "Кавун (малий європакет)",
                    to: "/"
                },
            ]
        },
        {
            id: 3,
            title: "Малий європакет 2",
            items: [
                {
                    text: "Арахіс (малий європакет)12",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет) 22",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)sd",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)",
                    to: "/"
                },
            ]
        },
        {
            id: 2,
            title: "Малий європакет 2",
            items: [
                {
                    text: "Арахіс (малий європакет) dsds",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)",
                    to: "/"
                },
                {
                    text: "Арахіс (малий європакет)dd",
                    to: "/"
                },
            ]
        },
    ]

    const handleMouseHover = (id: number) => {
        const itemMenu = menuListItems.find(item => item.id === id);

        setActiveMenuItem(itemMenu || null);
    }


    return (
        <>
            <header className={cl.header + " header"}>
                <div className="global-container">
                    <div className={cl.navbar}>
                        <ul className={cl.navbar__list}>
                            <li className={cl.navbar__item}>
                                <Link to={PATHS.MAIN_PAGE} className={cl.navbar__link}>Культура</Link>
                            </li>
                            <li className={cl.navbar__item}>
                                <Link to={PATHS.MAIN_PAGE} className={cl.navbar__link}>Прайс</Link>
                            </li>
                            <li className={cl.navbar__item}>
                                <Link to={PATHS.MAIN_PAGE} className={cl.navbar__link}>Акції</Link>
                            </li>
                            <li className={cl.navbar__item}>
                                <Link to={PATHS.MAIN_PAGE} className={cl.navbar__link}>Доставка</Link>
                            </li>
                            <li className={cl.navbar__item}>
                                <Link to={PATHS.MAIN_PAGE} className={cl.navbar__link}>Контакти</Link>
                            </li>
                        </ul>
                        <div className={cl.navbar__contacts}>
                            <div className={cl.navbar__phones}></div>
                            <Button className={cl.navbar__connect + " " + cl.navbar__link} onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}>Зворотній зв’язок</Button>
                        </div>
                    </div>
                    <div className={cl["header-actions"]}>
                        <Logo className={cl["header-actions__logo"]}/>
                        <Button 
                            className={cl[`header-actions__catalog`] + " " + cl[isCatalogOpen ? "header-actions__catalog_active" : ""]} 
                            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                        >
                            <div 
                                className={
                                    isCatalogOpen ? 
                                        cl["header-actions__catalog_button_active"] 
                                        : cl["header-actions__catalog_button"]
                                }
                            >
                            </div>
                            <p className={cl["header-actions__catalog_title"]}>Каталог</p>
                        </Button>
                        <CustomInput
                            type="text" 
                            placeholder='Я шукаю...' 
                            className={cl["header-actions__search_input"] + " " +  cl["header-actions__search"]} 
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
                                    menuItems.map((item: any) => {
                                        return (
                                            <li className={cl.menu__item + " "} 
                                                onMouseOver={() => handleMouseHover(item.id)}
                                            >
                                                <p className={cl.menu__item_icon + " material-symbols-outlined"}>{item.iconName}</p>
                                                <p className={cl.menu__text}>{item.title}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
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
                                    {
                                        activeMenuItem?.items.map((item: any) => {
                                            
                                            return (
                                                <li className={cl[`menu-items__item`]}>
                                                    <Link to={item.to} className={`${cl["menu-items__item_text"]} ${item.isTitle ? cl["menu-items__item_title"] : ""}`}>{item.text}</Link>
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