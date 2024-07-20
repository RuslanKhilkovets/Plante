import { FC } from 'react';

import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import ICustomSelectProps from '../../types/ICustomSelectProps';

const StyledSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root': {
    borderRadius: '40px',
    padding: "2px",
    border: '2px solid green',
    minWidth: "170px",
    '& .MuiOutlinedInput-input': {
      color: 'green',
    },
  },
  '& .MuiSelect-icon': {
    color: 'green',
  },
  "&.MuiList-root": {
    height: "100px"
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  
  '&.MuiMenuItem-root': {
    boxShadow: "none",
    color: 'black',
    fontWeight: "600",
    '&.Mui-selected': {
      backgroundColor: '#e8e8e8',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#e8e8e8',
    },
  },
}));

const CustomSelect: FC<ICustomSelectProps> = ( { onChange, value, options, label, className } ) => {

  return (
    <FormControl variant="outlined">
        <InputLabel id="sorting-label">
            {label}
        </InputLabel>
        <StyledSelect
            labelId="sorting-label"
            value={value}
            onChange={onChange}
            label={label}
            className={className}
        >
            {
                options.map(option => {
                    return(
                        <StyledMenuItem key={option.id} value={option.value}>{option.label}</StyledMenuItem>
                    )
                })
            }
        </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;
