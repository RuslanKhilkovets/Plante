import { FC } from 'react';

import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import ICustomSelectProps from '../../types/ICustomSelectProps';


const StyledSelect = styled(Select)(() => ({
  '&.MuiOutlinedInput-root': {
    borderRadius: '40px',
    padding: "2px",
    border: '2px solid green',
    width: "100%",
    '& .MuiOutlinedInput-input': {
      color: 'green',
    },
  },
  '& .MuiSelect-icon': {
    color: 'green',
  },
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  '&.MuiMenuItem-root': {
    color: 'black',
    fontWeight: "500",
    '&.Mui-selected': {
      backgroundColor: '#e8e8e8',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#e8e8e8',
    },
  },
}));

const CustomSelect: FC<ICustomSelectProps> = ({ onChange, value, options, label, className, name }) => {
  const MenuProps = {
    PaperProps: {
      style: {
        marginTop: '10px',
        borderRadius: '20px',
        boxShadow: "none",
        border: "2px solid #2A8927",
      },
    },
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="sorting-label">
        {label}
      </InputLabel>
      <StyledSelect
        labelId="sorting-label"
        value={value}
        onChange={onChange}
        label={label}
        className={className}
        MenuProps={MenuProps}
        name={name}
      >
        {options.map(option => (
          <StyledMenuItem key={option.id} value={option.value}>
            {option.label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;
