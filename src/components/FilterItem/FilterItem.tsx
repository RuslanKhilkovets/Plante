import React, { FC } from 'react';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import cl from "./FilterItem.module.scss";
import { Button } from '@mui/base';


const FilterItem: FC = ({ children, onClick }) => {
  return (
    <Button className={cl["filter-button"]} onClick={onClick}>
      {children}
      <IconButton >
        <CloseIcon />
      </IconButton>
    </Button>
  );
};

export default FilterItem;
