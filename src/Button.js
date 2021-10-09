import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants"

const SIZES = {
  small: {
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px", // compensanting the border pxs (-4px), for all.
    "--borderRadius": "3px",
  },
  medium: {
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px",
    "--borderRadius": "4px",
  },
  large: {
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px",
    "--borderRadius": "5px",
  },
}

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant === 'outline') {
    Component = OutlineButton;
  } else if (variant === 'ghost') {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component style={styles}>{children}</Component>
  )
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border-radius: var(--borderRadius);
  padding: var(--padding);
  border: 2px solid transparent;

    &:focus {
      outline-color: ${COLORS.primary};
      outline-offset: 4px;
    }
`

const FillButton = styled(ButtonBase)`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};

    &:hover {
      background-color: ${COLORS.primaryLight};
      color: ${COLORS.offwhite};
    }
`

const OutlineButton = styled(ButtonBase)`
  color: ${COLORS.primary};
  background-color: ${COLORS.white};
  border: 2px solid currentColor ;

  &:hover {
      background-color: ${COLORS.offwhite};
      color: ${COLORS.primaryLight}
    }
`

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:hover {
      background-color: ${COLORS.transparentGray15};
      color: ${COLORS.black}
    }

  &:focus {
      outline-color: ${COLORS.transparentGray75};
    }
`

export default Button

// Declarar um objeto SIZES e criar 3 objetos dentro;
// Delcarar uma let Component dentro da funcao, e fazer um if/else com varient;
// retornar component com props styles;
// Usar fontSize, Padding, Border e COlor como variaveis