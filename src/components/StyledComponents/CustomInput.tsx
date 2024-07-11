import * as React from 'react';
import { Input as BaseInput, InputProps } from '@mui/base/Input';
import { styled } from '@mui/system';

const Input = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <BaseInput {...props} ref={ref} />;
});

export function UnstyledInputBasic() {
  return <Input aria-label="Demo input" placeholder="Type something…" />;
}

const CustomInput = styled('input')(
  ({ theme }) => `
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  padding: 16px;
  background: #e9e8e8;
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

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);
export default CustomInput;