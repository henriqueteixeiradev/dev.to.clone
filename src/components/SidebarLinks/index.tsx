import Button from 'elements/Button'
import React from 'react'

import * as S from './styled'

import { Home, Export } from 'icons'

export const SidebarLinks = () => {
  return (
    <S.Section>
      <Button
        text="Home"
        styled="secundary"
        width="100%"
        icon={Home}
        justify="left"
      />
      <Button
        text="Listing"
        styled="secundary"
        width="100%"
        icon={Export}
        justify="left"
      />

      <b>Other</b>

      <Button
        text="Home"
        styled="secundary"
        width="100%"
        icon={Home}
        justify="left"
      />
      <Button
        text="Listing"
        styled="secundary"
        width="100%"
        icon={Export}
        justify="left"
      />
    </S.Section>
  )
}

export default SidebarLinks
