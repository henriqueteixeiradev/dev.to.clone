import React, { ReactNode } from 'react'
import Image from 'next/image'
import * as S from './styled'

interface CardBoxProps {
  children: ReactNode
  image?: string
}

export const CardBox = ({ children, image }: CardBoxProps) => {
  return (
    <S.CardWrapper>
      <S.ImageCardWrapper>
        {image && <Image src={image} width={1000} height={420} />}
      </S.ImageCardWrapper>
      <div className="main">{children}</div>
    </S.CardWrapper>
  )
}

export default CardBox
