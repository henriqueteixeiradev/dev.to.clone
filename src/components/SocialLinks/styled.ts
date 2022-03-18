import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;

    margin-top: 1.6rem;

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;

      cursor: pointer;

      background-color: transparent;

      border-radius: ${theme.border.radius};

      & > svg {
        fill: #404040;
      }

      &:hover {
        background-color: ${theme.colors.primary}1a;

        & > {
          svg {
            fill: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`
