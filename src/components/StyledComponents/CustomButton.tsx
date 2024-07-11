import * as React from 'react';
import { Button as ButtonUnstyled, ButtonProps } from '@mui/base/Button';
import { styled } from '@mui/system';

const CustomButton = React.forwardRef(function CustomButton(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return <ButtonUnstyled {...props} ref={ref} />;
});

const StyledButton = styled(CustomButton)(
  ({ theme }) => `
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  padding: 16px;
  text-align: center;
  background: #2a8927;
  border-radius: 30px;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    transition: .3s;
    opacity: .9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export default StyledButton;