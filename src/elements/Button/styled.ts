import styled, { css } from 'styled-components'

interface ButtonProps {
  width: string
  justify: string
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: center;

  padding: 0.9rem;

  width: ${(props) => props.width || 'auto'};

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    border-radius: ${theme.border.radius};
    border: 0.1rem solid ${theme.colors.primary};
    color: ${theme.colors.primary};
  `}

  font-weight: 500;

  background: transparent;

  cursor: pointer;

  & > svg {
    margin-right: 1rem;
  }

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}

    text-decoration: underline;
  }

  &.secundary {
    display: flex;

    padding: 0.8rem 1.5rem;

    ${({ theme }) => css`
      color: ${theme.colors.texts};
    `}

    font-weight: 400;

    background: transparent;
    border: initial;

    cursor: pointer;

    &:hover {
      ${({ theme }) =>
        css`
          color: ${theme.colors.primary};
        `}
      background-color: rgba(59, 73, 223, 10%);
    }
  }

  &.tertiary {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};

      transition: all 0.2s ease;

      &:hover {
        text-decoration: initial;
        background-color: rgb(47 58 178);
      }
    `}
  }

  &.quaternary {
    border: initial;

    &:hover {
      ${({ theme }) =>
        css`
          color: ${theme.colors.primary};

          & > svg {
            fill: ${theme.colors.primary};
          }
        `}
      background-color: rgba(59, 73, 223, 10%);
    }
  }

  &.quinary {
    border: initial;

    padding: 0.9rem 1.2rem;

    ${({ theme }) => css`
      font-size: 1.8rem;
      font-weight: 700;
      color: ${theme.colors.texts};
    `}

    &:hover {
      ${({ theme }) =>
        css`
          color: ${theme.colors.primary};
          background-color: ${theme.colors.white};
          text-decoration: initial;
          back & > svg {
            fill: ${theme.colors.primary};
          }
        `}
    }
  }

  &.senary {
    ${({ theme }) => css`
      background-color: #d6d6d7;
      color: ${theme.colors.white};
      border: initial;

      transition: all 0.2s ease;
      color: ${theme.colors.texts};

      &:hover {
        text-decoration: initial;
        background-color: #bdbdbd;
      }
    `}
  }
`
