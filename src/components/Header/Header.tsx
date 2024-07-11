import { useState } from 'react';
import cl from "./Header.module.scss";
import ConnectModal from './ConnectModal';

const Header = () => {
    const [searchPrompt, setSearchPrompt] = useState();
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
    console.log(isConnectModalOpen);
    
    const onSearchChange = (e: any) => {
        const { value } = e.target;        
        setSearchPrompt(value);
    }

    return (
        <div className="global-container">
            <div className={cl.navbar}>
                <ul className={cl.navbar__list}>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__link}>Культура</a>
                    </li>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__link}>Прайс</a>
                    </li>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__link}>Акції</a>
                    </li>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__link}>Доставка</a>
                    </li>
                    <li className={cl.navbar__item}>
                        <a href="#" className={cl.navbar__link}>Контакти</a>
                    </li>
                </ul>
                <div className={cl.navbar__contacts}>
                    <div className={cl.navbar__phones}></div>
                    <button className={cl.navbar__connect + " " + cl.navbar__link} onClick={() => setIsConnectModalOpen(!isConnectModalOpen)}>Зворотній зв’язок</button>
                </div>
            </div>
            <header className={cl.header}>
                <div className={cl.header__logo}></div>
                <div className={cl.header__catalog}>
                    <div className={cl.header__catalog_button}></div>
                    <p className={cl.header__catalog_title}>Каталог</p>
                </div>
                <div
                    className={cl.header__search}
                >
                    <input 
                        type="text" 
                        placeholder='Я шукаю...' 
                        className={cl.header__search_input} 
                        value={searchPrompt} 
                        onChange={onSearchChange}
                        width={"100%"}
                    />
                    <button className={cl.header__search_btn}></button>
                </div>
               
                <div className={cl.header__icons}>
                    <div className={cl.header__icon}></div>
                    <div className={cl.header__icon}></div>
                    <div className={cl.header__icon}></div>
                </div>
            </header>
            <ConnectModal open={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)}/>
        </div>
    );
};

export default Header;