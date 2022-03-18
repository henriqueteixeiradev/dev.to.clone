import styled, { css } from 'styled-components'

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;

    grid-template-columns: 240px 2fr 1fr;

    grid-template-areas: 'E C D';

    gap: 1.6rem;

    width: 100%;

    max-width: 1280px;
    margin: 0 auto;

    padding: 1.6rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 2.5fr;
      grid-template-areas: 'E C';
      padding: 0.8rem;
    }

    @media (max-width: 768px) {
      display: flex;
      padding: 0.8rem 0;
    }
  `}
`

export const LeftAreaWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: E;
    @media (max-width: 768px) {
      display: none;
    }
  `}
`
export const CenterAreaWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: C;

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`
export const RightAreaWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: D;

    @media (max-width: 1024px) {
      display: none;
    }
  `}
`
