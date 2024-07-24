import { FC } from 'react';

import { Box } from '@mui/material';

import ICloseModalButtonProps from '../../types/ICloseModalButtonProps';
import CloseIcon from '../../icons/close.svg'; 


const CloseModalButton: FC<ICloseModalButtonProps> = ( { onClick } ) => {
    return (
        <Box onClick={onClick} alignItems={"center"}>
            <img 
                src={CloseIcon} 
                alt="Close" 
                style={{
                    width: "32px",
                    height: "32px",
                    cursor: "pointer"
                }}
            />
        </Box>
    );
};

export default CloseModalButton;
