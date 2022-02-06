import * as React from 'react';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  name,
  ...rest
}) => {
  return (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
      name={name}
      sx={{
        color: '#B0191A',
        padding: '0px',
        '&.Mui-checked': {
          color: '#B0191A',
        },
      }}
      {...rest}
    />
  );
};

export { Checkbox };
