import { FC } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import ICustomLinkProps from '../../types/ICustomLinkProps';


const StyledLink = styled(Link)(({ theme }) => ({
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    color: "#121212",
    transition: ".3s",
    lineHeight: "1.2rem",
    "&:hover": {
        color: "#2a8927",
        transition: ".3s",
    }
}));

const CustomLink: FC<ICustomLinkProps> = ({ to, className, children, onMouseOver, ...rest }) => {
    return (
        <StyledLink to={to} className={className} onMouseOver={onMouseOver} {...rest}>
            {children}
        </StyledLink>
    );
};

export default CustomLink;
