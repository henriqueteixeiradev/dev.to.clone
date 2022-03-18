import styled, { css } from 'styled-components'

export const ImageCardWrapper = styled.div`
  ${({ theme }) => css`
    img {
      border-top-left-radius: ${theme.border.radius};
      border-top-right-radius: ${theme.border.radius};
    }
  `}
`
export const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    background: ${theme.colors.boxBg};

    border-radius: ${theme.border.radius};

    box-shadow: 0 0 0.3rem rgb(0 0 0 / 10%);
    position: relative;

    & > .main {
      padding: 1.6rem;
    }
  `}
`
