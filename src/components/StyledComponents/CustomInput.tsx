import * as React from 'react';

import { styled } from '@mui/system';
import { InputBase, InputBaseProps, InputAdornment } from '@mui/material';

const StyledInput = styled(InputBase)(
  () => `
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    padding: 12px;
    border-radius: 30px;
    border: 1px solid transparent;
    transition: .3s;
    &:hover {
      border-color: grey;
      transition: .3s;
    }

    &:focus {
      border-color: green;
      transition: .3s;
    }

    &:focus-visible {
      outline: 0;
    }
  `,
);

const CustomInput = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (props, ref) => {
    return (
      <StyledInput
        ref={ref}
        {...props}
        endAdornment={
          props.endAdornment !== null && 
          <InputAdornment position="end">
            {props.endAdornment}
          </InputAdornment>
        }
      />
    );
  }
);

export default CustomInput;