import React from 'react'

import CreateAccount from 'components/CreateAccount'

import * as S from './styled'
import NavMenu from 'components/NavMenu'
import Posts from 'components/Posts'
import SidebarLinks from 'components/SidebarLinks'
import SocialLinks from 'components/SocialLinks'
import SidebarCrayons from 'components/SidebarCrayons'

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.LeftAreaWrapper>
        <CreateAccount />
        <SidebarLinks />
        <SocialLinks />
      </S.LeftAreaWrapper>
      <S.CenterAreaWrapper>
        <NavMenu />
        <Posts />
      </S.CenterAreaWrapper>
      <S.RightAreaWrapper>
        <SidebarCrayons />
      </S.RightAreaWrapper>
    </S.HomeWrapper>
  )
}

export default Home
