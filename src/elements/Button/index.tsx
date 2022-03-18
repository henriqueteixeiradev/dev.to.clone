import React, { ReactNode } from 'react'

import * as S from './styled'

interface ButtonProps {
  width?: string
  styled?: string
  text?: string
  icon?: ReactNode
  justify?: string
}

export const Button = ({ text, width, styled, icon, justify }: ButtonProps) => {
  return (
    <S.Button className={styled || 'primary'} width={width} justify={justify}>
      {icon}
      {text}
    </S.Button>
  )
}

export default Button
