import styled, { css } from 'styled-components'

interface TagLinksWrapperProps {
  color: string
}

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1.6rem;
  `}
`
export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    gap: 0.8rem;

    margin-bottom: 1.6rem;

    & > img {
      width: 3.3rem;
      height: 3.3rem;
      border-radius: 50%;
    }

    & > .texts-avatarWrapper {
      display: flex;
      flex-direction: column;

      & > label {
        font-size: ${theme.font.sizes.xxsmall};
        font-weight: 500;
      }

      & > small {
        font-weight: 200;
      }
    }
  `}
`
export const BoxInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    padding-left: 4rem;

    @media (max-width: 768px) {
      padding-left: 0;
    }

    & > a {
      text-decoration: none;
      color: ${theme.colors.texts};

      & > h1 {
        font-size: ${theme.font.sizes.xlarge};

        @media (max-width: 640px) {
          font-size: ${theme.font.sizes.medium};
        }
      }

      &:hover {
        & > h1 {
          font-size: ${theme.font.sizes.xlarge};
          color: ${theme.colors.primary};
        }
      }
    }
  `}
`
export const TagLinksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.2rem;
    margin-top: 0.5rem;
  `}
`

export const HashButton = styled.button<TagLinksWrapperProps>`
  padding: 0.4rem 0.7rem;
  background-color: transparent;
  cursor: pointer;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.sizes.medium};
  `}

  &:hover {
    background-color: ${(props) => `${props.color}1a` || '#ffffff1a'};
    outline: 0.1rem solid ${(props) => props.color || '#ffffff1a'};

    & > span {
      color: ${(props) => props.color || '#ffffff1a'};
    }
  }
`
export const RelationshipWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > .left-RelationshipWrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > button {
        display: flex;
        align-items: center;
        cursor: pointer;

        gap: 0.5rem;

        padding: 0.8rem 1.2rem;
        border-radius: ${theme.border.radius};
        background: transparent;

        &:hover {
          background: ${theme.colors.gray}1a;
        }
      }
    }

    & > .right-RelationshipWrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;


      & > button {
        display: flex;
        align-items: center;
        cursor: pointer;

        gap: 0.5rem;

        padding: 0.8rem 1.2rem;
        border-radius: ${theme.border.radius};
        background: ${theme.colors.gray}5a;

        &:hover {
          background: ${theme.colors.gray}8a;
        }
      }s
    }
  `}
`
