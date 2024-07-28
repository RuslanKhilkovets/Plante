import { Box, IconButton } from "@mui/material";

import Logo from "../Logo/Logo";
import CustomLink from "../../UI/Link/CustomLink";

import { footerLinksBlock1, footerLinksBlock2, footerLinksBlock3 } from "../../../constants/footerLinks";

import phoneIcon from "../../../icons/call.svg";
import mailIcon from "../../../icons/mail.svg";
import locationIcon from "../../../icons/location_on.svg";

import cl from "./Footer.module.scss";


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
                                <CustomLink to={""} className={cl.footer__contact}>
                                    <a href="tel:+38(099)323-55-03" className={cl.footer__link}> 
                                        <IconButton>
                                            <img
                                                src={phoneIcon}
                                            />
                                        </IconButton>
                                        <span>Kyivstar</span>
                                        <span>+38 (099) 323-55-03</span>
                                    </a>
                                </CustomLink>
                            </li>
                            <li className={cl.footer__item}>
                                <CustomLink to={""} className={cl.footer__contact}>
                                    <a href="tel:+38 (067) 282-52-44" className={cl.footer__link}>
                                        <IconButton>
                                            <img
                                                src={phoneIcon}
                                            />
                                        </IconButton>
                                        <span>Lifecell</span> 
                                        <span>+38 (067) 282-52-44</span>
                                    </a>
                                </CustomLink>
                            </li>
                            <li className={cl.footer__contact}>
                                <a href="mailto:planteua2017@gmail.com" className={cl.footer__link}>
                                    <IconButton>
                                        <img
                                            src={mailIcon}
                                        />
                                    </IconButton>
                                    <span>planteua2017@gmail.com</span>
                                </a>
                            </li>
                            <li className={cl.footer__contact}>
                                <div className={cl.footer__link}>
                                    <IconButton>
                                        <img
                                            src={locationIcon}
                                        />
                                    </IconButton>
                                    <span className={cl.footer__link}>
                                        Україна, <br/>
                                        Хмельницька область, <br/>
                                        м. Хмельницький, <br/>
                                    </span>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;