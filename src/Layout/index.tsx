import React, { ReactNode } from 'react'

import TopMenu from 'components/TopMenu'

import * as S from './styled'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Section>
      <TopMenu />

      <S.Main>{children}</S.Main>
    </S.Section>
  )
}

export default Layout
