import { Link } from "react-router-dom";

import { Box } from "@mui/material";

import Logo from "../Logo/Logo";

import PATHS from "../../router/paths";
import cl from "./Footer.module.scss";

import YoutubeIcon from "../../icons/Youtube.svg";
import ViberIcon from "../../icons/Viber.svg";
import FacebookIcon from "../../icons/Facebook.svg";
import CustomLink from "../StyledComponents/CustomLink";

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
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Культура</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Про компанію</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Прайс</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Акції</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Доставка</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Замовлення</CustomLink>
                            </li>
                        </ul>
                        <ul className={cl.footer__list}>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Умови використання сайту</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Усі категорії</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Доставка та оплата</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Повернення товару</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Контакти</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Співпраця з нами</CustomLink>
                            </li>
                        </ul>
                        <ul className={cl.footer__list + " " + cl.footer__article}>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>Популярні статті</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>"Євро Овочі"</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>"Саджанці Профі"</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>"Ботанічний Кошик"</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>"Експерт Агро"</CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>"Екологічне Поле"</CustomLink>
                            </li>
                        </ul>
                        <ul className={cl.footer__list}>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>
                                    Kyivstar
                                </CustomLink>
                                <a href="tel:+38(099)323-55-03">+38 (099) 323-55-03</a>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={PATHS.MAIN_PAGE} className={cl.footer__link}>
                                    Kyivstar
                                </CustomLink>
                                <a href="tel:+38 (067) 282-52-44">+38 (067) 282-52-44</a>
                            </li>
                            <li className={cl.footer__item}>

                                <a href="mailto:planteua2017@gmail.com">planteua2017@gmail.com</a>
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