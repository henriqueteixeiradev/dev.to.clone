import React from 'react'

import * as S from './styled'

import { Logo, MagnifyingGlass, Hamburguer } from 'icons'
import Button from 'elements/Button'

import useWindowDimensions from 'hook/useWindowDimensions'

export const TopMenu = () => {
  let isServer = typeof window === 'undefined' ? false : true

  const { viewportWidth } = useWindowDimensions()

  return (
    <S.Section>
      <S.Content>
        <S.BoxLeftWrapper>
          {viewportWidth < 768 && isServer && (
            <Button icon={Hamburguer} styled="quaternary" width="40px" />
          )}

          {Logo}
          <S.InputSearchWrapper>
            <input type="search" placeholder="Search..." />

            <button>{MagnifyingGlass}</button>
          </S.InputSearchWrapper>
        </S.BoxLeftWrapper>

        <S.BoxRightWrapper>
          {viewportWidth < 768 && isServer && (
            <Button icon={MagnifyingGlass} styled="quaternary" />
          )}

          {viewportWidth > 768 && isServer && (
            <Button text="Log in" styled="secundary" width="76px" />
          )}

          <Button text="Create account" styled="primary" width="141px" />
        </S.BoxRightWrapper>
      </S.Content>
    </S.Section>
  )
}

export default TopMenu
