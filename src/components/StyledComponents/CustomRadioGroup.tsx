import { styled } from '@mui/material/styles';

import Radio, { RadioProps } from '@mui/material/Radio';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 30,
  height: 30,
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  border: `2px solid ${theme.palette.mode === 'dark' ? '#A8A8A8' : '#A8A8A8'}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#ffffff', 
  border: '2px solid #2A8927',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#2A8927',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#ffffff', 
    '&::before': {
      backgroundColor: '#2A8927', 
    },
  },
});

function CustomRadioButton(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default CustomRadioButton;