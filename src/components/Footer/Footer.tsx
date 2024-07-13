import { Box } from "@mui/material";

import Logo from "../Logo/Logo";

import PATHS from "../../router/paths";
import cl from "./Footer.module.scss";

import YoutubeIcon from "../../icons/Youtube.svg";
import ViberIcon from "../../icons/Viber.svg";
import FacebookIcon from "../../icons/Facebook.svg";
import CustomLink from "../StyledComponents/CustomLink";

const footerLinksBlock1 = [
    { id: 1, text: 'Культура', path: PATHS.MAIN_PAGE },
    { id: 2, text: 'Про компанію', path: PATHS.MAIN_PAGE },
    { id: 3, text: 'Прайс', path: PATHS.MAIN_PAGE },
    { id: 4, text: 'Акції', path: PATHS.MAIN_PAGE },
    { id: 5, text: 'Доставка', path: PATHS.MAIN_PAGE },
    { id: 6, text: 'Замовлення', path: PATHS.MAIN_PAGE }
];

const footerLinksBlock2 = [
    { id: 1, text: 'Умови використання сайту', path: PATHS.MAIN_PAGE },
    { id: 2, text: 'Усі категорії', path: PATHS.MAIN_PAGE },
    { id: 3, text: 'Доставка та оплата', path: PATHS.MAIN_PAGE },
    { id: 4, text: 'Повернення товару', path: PATHS.MAIN_PAGE },
    { id: 5, text: 'Контакти', path: PATHS.MAIN_PAGE },
    { id: 6, text: 'Співпраця з нами', path: PATHS.MAIN_PAGE }
];

const footerLinksBlock3 = [
    { id: 1, text: 'Популярні статті', path: PATHS.MAIN_PAGE },
    { id: 2, text: '"Євро Овочі"', path: PATHS.MAIN_PAGE },
    { id: 3, text: '"Саджанці Профі"', path: PATHS.MAIN_PAGE },
    { id: 4, text: '"Ботанічний Кошик"', path: PATHS.MAIN_PAGE },
    { id: 5, text: '"Експерт Агро"', path: PATHS.MAIN_PAGE },
    { id: 6, text: '"Екологічне Поле"', path: PATHS.MAIN_PAGE }
];

const Footer = () => {
    return (
        <footer className={cl.footer + " footer"}>
            <div className="global-container">
                <div className={cl.footer__wrapper}>
                    <div className={cl.footer__item_contacts}>
                        <Box>
                            <Logo />
                        </Box>
                        <div className={cl.footer__item_contacts_icons}>
                            <CustomLink
                                to={"/"}
                                className={cl.footer__item_contacts_link}
                            >
                            </CustomLink>
                            <CustomLink
                                to={"/"}
                                className={cl.footer__item_contacts_link}
                            >
                            </CustomLink>
                            <CustomLink
                                to={"/"}
                                className={cl.footer__item_contacts_link}
                            >
                            </CustomLink>
                        </div>
                    </div>
                    <div className={cl.footer__links}>
                        <ul className={cl.footer__list}>
                            {footerLinksBlock1.map(link => (
                                <li key={link.id} className={cl.footer__item}>
                                    <CustomLink to={link.path} className={cl.footer__link}>{link.text}</CustomLink>
                                </li>
                            ))}
                        </ul>
                        <ul className={cl.footer__list}>
                            {footerLinksBlock2.map(link => (
                                <li key={link.id} className={cl.footer__item}>
                                    <CustomLink to={link.path} className={cl.footer__link}>{link.text}</CustomLink>
                                </li>
                            ))}
                        </ul>
                        <ul className={cl.footer__list + " " + cl.footer__article}>
                            {footerLinksBlock3.map(link => (
                                <li key={link.id} className={cl.footer__item}>
                                    <CustomLink to={link.path} className={cl.footer__link}>{link.text}</CustomLink>
                                </li>
                            ))}
                        </ul>
                        <ul className={cl.footer__list}>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>
                                    <span>Kyivstar</span>
                                    <a href="tel:+38(099)323-55-03" className={cl.footer__link}>+38 (099) 323-55-03</a>
                                </CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>
                                    <span>Lifecell</span>
                                    <a href="tel:+38 (067) 282-52-44" className={cl.footer__link}>+38 (067) 282-52-44</a>
                                </CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <a href="mailto:planteua2017@gmail.com" className={cl.footer__link}>planteua2017@gmail.com</a>
                            </li>
                            <li className={cl.footer__item}>
                                <p className={cl.footer__link}>
                                    Україна, <br/>
                                    Хмельницька область, <br/>
                                    м. Хмельницький, <br/>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;