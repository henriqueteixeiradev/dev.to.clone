import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: 0.8rem;

    & > button {
      justify-content: center !important;
    }
  `}
`
