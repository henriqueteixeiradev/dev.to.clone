import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    & > div {
      padding: 0;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    top: 0;
    left: 0;

    & > img {
      display: none;
    }
  `}
`

export const HeadlineWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 100%;

    padding: 0.8rem 1.6rem 1.2rem 1.6rem;

    & > a {
      text-decoration: none;
      color: ${theme.colors.texts};
      opacity: 0.9;
      line-height: 3rem;

      &:hover {
        & > h2 {
          font-size: ${theme.font.sizes.medium};
          color: ${theme.colors.primary};
        }
      }

      & > h2 {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

export const LinksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    & > a {
      display: flex;
      align-items: center;

      width: 100%;

      border-top: 0.1rem solid rgb(0 0 0 / 3%);

      padding: 1.6rem;
      line-height: 2.4rem;
      color: ${theme.colors.texts};
      text-decoration: none;

      &:hover {
        background-color: white;
        color: ${theme.colors.primary};
      }
    }
  `}
`
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: .8rem;

    width: 100%;

    padding: 1.6rem;
  `}
`
