import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  height: 5.6rem;
  display: flex;
  width: 100%;
  align-items: center;

  border-radius: 0.4rem;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // INPUT
  .MuiInputBase-input {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.headText};
    background-color: ${props => props.theme.colors.inputBackground};
    display: flex;
    align-items: center;
  }

  .MuiFilledInput-underline {
    :after {
      border-color: ${props => props.theme.colors.secondary};
    }
  }

  // LABEL
  .MuiFormLabel {
    &-root {
      font-size: 1.6rem;
      color: ${props => props.theme.colors.cardText};

      &.Mui-focused {
        color: ${props => props.theme.colors.headText};
      }
    }
  }
`;

export const StyledTextField = styled(TextField)``;

export const SelectContainer = styled(Container)`
  svg {
    font-size: 3rem;
  }
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;

  .Mui-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledInputLabel = styled(InputLabel)``;

export const StyledSelect = styled(Select)`
  color: red;

  .MuiPaper-root {
    background-color: ${props => props.theme.colors.dashboardBackground};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.headText};
  }
`;

export const SelectFileContainer = styled(SelectContainer)`
  display: flex;
  position: relative;

  > div {
    position: absolute;
  }
`;

export const SelectFileComponent = styled.div`
  /* position: relative; */
  width: 100%;
  z-index: 9999999;
  height: 100%;

  label {
    position: relative;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    box-shadow: none;

    &:hover {
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
  }
`;
