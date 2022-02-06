import { StandardTextFieldProps, Button, SelectProps } from '@material-ui/core';
import React from 'react';
import { MdAttachFile, MdKeyboardArrowDown } from 'react-icons/md';
import useIntl from '../../hooks/useIntl';
import { OptionProps } from '../../types';

import {
  Container,
  StyledFormControl,
  StyledSelect,
  SelectContainer,
  StyledInputLabel,
  StyledMenuItem,
  StyledTextField,
  SelectFileContainer,
  SelectFileComponent,
} from './styles';

const ModalInput: React.FC<StandardTextFieldProps> = ({ ...rest }) => {
  return (
    <Container>
      <StyledTextField
        variant="filled"
        fullWidth
        autoComplete="new-password"
        inputProps={{
          list: 'autocompleteOff',
        }}
        {...rest}
      />
    </Container>
  );
};

interface ModalSelectProps extends SelectProps {
  options: OptionProps[];
  label?: string;
  value: unknown;
  disabled?: boolean;
}

interface ModalFileProps extends StandardTextFieldProps {
  label?: string;
  value: unknown;
  disabled?: boolean;
  accept: string;
  name?: string;
}

const ModalSelect: React.FC<ModalSelectProps> = ({
  options,
  label,
  value,
  disabled,
  ...rest
}) => {
  const intl = useIntl();

  return (
    <SelectContainer>
      <StyledFormControl variant="filled" disabled={disabled}>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledSelect
          IconComponent={MdKeyboardArrowDown}
          value={value}
          {...rest}
        >
          <StyledMenuItem value="">{intl.select}</StyledMenuItem>
          {options?.map(option => (
            <StyledMenuItem key={option.id} value={option.id}>
              {option.label
                ? intl[option.label] || option.label
                : option.description}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </SelectContainer>
  );
};

const ModalFile: React.FC<ModalFileProps> = ({
  label,
  value,
  disabled,
  name,
  accept,
  onChange,
}) => {
  return (
    <SelectFileContainer>
      <SelectFileComponent>
        <Button variant="contained" component="label">
          <input type="file" hidden onChange={onChange} accept={accept} />
        </Button>
      </SelectFileComponent>

      <StyledFormControl variant="filled" disabled={disabled}>
        <StyledInputLabel>{name || label}</StyledInputLabel>
        <StyledSelect IconComponent={MdAttachFile} value={value} />
      </StyledFormControl>
    </SelectFileContainer>
  );
};

export { ModalInput, ModalSelect, ModalFile };
