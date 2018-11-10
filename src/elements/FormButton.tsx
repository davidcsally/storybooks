import React from 'react';
import styled, { css } from 'styled-components';

// colors
const black = '#000000';
const white = '#ffffff';

// reset foundation
const buttonResets = css`
  min-height: 0;
  min-width: 0;

  &:hover {
    background-color: inherit;
    color: inherit
  }

  &:focus {
    background-color: inherit;
    color: inherit
  }
`;

// fonts
const fontFamilyBody = css`
  font-family: "Proxima Nova", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const fontStyleNormal = css`
  font-size: 1rem;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

// the styled button element
const FormButton =  styled.button`
  ${buttonResets}
  ${fontFamilyBody}
  ${fontStyleNormal}
  width: 235px;
  height: 45px;
  font-weight: 600;
  text-align: center;
  background-color: ${props => (props.inverted ? black : white)};
  color: ${props => (props.inverted ? white : black)};
  border: 1px solid ${black};
`;

export default FormButton;
