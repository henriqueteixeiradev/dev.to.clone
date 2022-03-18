import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    margin-top: 1.6rem;

    & > b {
      margin: 2.6rem 0 1rem 1.6rem;
    }
  `}
`
