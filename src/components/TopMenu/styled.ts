import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5.6rem;

    background-color: ${theme.colors.white};
    box-shadow: 0 0.1rem 0.1rem rgb(0 0 0 / 10%);
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1280px;

    padding: 0 1.6rem;

    @media (max-width: 768px) {
      padding: 0 0 0 0;
      margin-left: 0.8rem;
    }
  `}
`
export const BoxLeftWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: 1.6rem;
  `}
`
export const BoxRightWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    & > button {
      margin-right: 0.8rem;
    }
  `}
`
export const InputSearchWrapper = styled.div`
  ${({ theme }) => css`
    width: 42rem;
    position: relative;

    @media (max-width: 768px) {
      display: none;
    }

    & > input {
      width: 100%;
      height: 4rem;
      padding: 1rem;
      border-radius: ${theme.border.radius};
      outline-color: ${theme.colors.primary};
      border: 0.1rem solid rgb(0 0 0 / 10%);

      &::placeholder {
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      background: transparent;

      width: 4.2rem;
      height: 100%;
      border-radius: ${theme.border.radius};
      cursor: pointer;

      & > svg {
        fill: '#262626';
      }

      &:hover {
        background: rgba(59, 73, 223, 10%);

        & > svg {
          fill: ${theme.colors.primary};
        }
      }
    }
  `}
`
