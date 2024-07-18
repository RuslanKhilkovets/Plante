import { Button, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import clsx from 'clsx';

import cl from "./CustomCollapse.module.scss";
import { FC, ReactNode } from 'react';

interface CustomCollapseProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    children: ReactNode; 
}

const CustomCollapse: FC<CustomCollapseProps> = ({ open, setOpen, title, children }) => {
    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className={cl["collapse"]}>
            <Button onClick={toggleCollapse} disableRipple className={cl["collapse__btn"]} fullWidth sx={{
                p: 0,
                display: "flex",
                justifyContent: "space-between"
            }}>
                {title}
                <IconButton
                    className={clsx(cl['expand'], {
                        [cl['expandOpen']]: open,
                    })}
                    aria-expanded={open}
                    aria-label="show more"
                    disableRipple
                    color='inherit'
                >
                    <ExpandMoreIcon />
                </IconButton>
            </Button>
            <Collapse in={open}>
                <div className={cl["collapse__content"]}>
                    {children}
                </div>
            </Collapse>
        </div>
    );
};

export default CustomCollapse;