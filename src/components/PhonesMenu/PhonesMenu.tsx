import React, { useState } from 'react';

import { Button } from '@mui/base';
import { IconButton, Menu, MenuItem } from '@mui/material';

import bottomArrowIcon from "../../icons/bottomArrowIcon.svg";

import cl from "./PhonesMenu.module.scss";


const PhonesMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  
    const handleOpenDashboard = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseDashboard = () => {
        setAnchorEl(null);
    };

    return (
        <div className={cl.phone}>
            <Button>
                <a href='tel:(050) 741-13-10' className={cl.phone__link}>(050) 741-13-10</a> 
                <IconButton
                    onClick={handleOpenDashboard}
                    disableRipple
                >
                    <img
                        src={ bottomArrowIcon }
                    />
                </IconButton>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleCloseDashboard}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{
                    mt: 2,
                    ml: -7
                }}
            >
                <MenuItem onClick={handleCloseDashboard}>
                    <a href='tel:(068) 195-80-18' className={cl.phone__link}>(068) 195-80-18</a> 
                </MenuItem>
                <MenuItem onClick={handleCloseDashboard}>
                    <a href='tel:(063) 679-26-01' className={cl.phone__link}>(063) 679-26-01</a> 
                </MenuItem>
            </Menu>  
        </div>
    );
};

export default PhonesMenu;