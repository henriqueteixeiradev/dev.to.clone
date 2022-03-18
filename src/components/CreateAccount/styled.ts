import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`
export const Content = styled.section`
  ${({ theme }) => css`
    h2 {
      font-size: ${theme.font.sizes.medium};
      line-height: 2.5rem;

      & > a {
        color: ${theme.colors.primary};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          color: ${theme.colors.primary};
          filter: saturate(0.7);
        }
      }
    }

    p {
      font-size: ${theme.font.sizes.small};
      line-height: 2.4rem;
      opacity: 0.7;
      margin-top: 1.6rem;
    }

    & > button {
      margin-top: 1.6rem;
    }

    & > button:last-child {
      margin-top: 0.5rem;
    }
  `}
`
