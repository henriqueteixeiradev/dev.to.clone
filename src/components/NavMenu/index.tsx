import Button from 'elements/Button'
import React from 'react'

import * as S from './styled'

export const NavMenu = () => {
  return (
    <S.Section>
      <Button text="Relevant" styled="quinary" />
      <Button text="Latest" styled="quinary" />
      <Button text="Top" styled="quinary" />
    </S.Section>
  )
}

export default NavMenu
