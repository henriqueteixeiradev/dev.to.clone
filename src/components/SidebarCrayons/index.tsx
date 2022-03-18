import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CardBox from 'elements/CardBox'

import * as S from './styled'
import Button from 'elements/Button'

export const SidebarCrayons = () => {
  return (
    <S.Section>
      <CardBox image="/img/crayons.png">
        <S.HeadlineWrapper>
          <Link href="#">
            <a>
              <h2>Deepgram x DEV Hackathon (13)</h2>
            </a>
          </Link>
        </S.HeadlineWrapper>

        <S.LinksWrapper>
          <Link href="#">
            <a>Let's get Hacking</a>
          </Link>

          <Link href="#">
            <a>AudioSign: Converting audio to animated sign language (P2)</a>
          </Link>

          <Link href="#">
            <a>[Deepgram X DEV Hackahton Submission Post Placeholder Title]</a>
          </Link>

          <Link href="#">
            <a>Tutorial: Play with a Speech-to-Text API using Node.js</a>
          </Link>
        </S.LinksWrapper>

        <S.ButtonsWrapper>
          <Button text="Submit Your Project!" styled="tertiary" />
          <Button text="See all posts" styled="senary" />
        </S.ButtonsWrapper>
      </CardBox>
    </S.Section>
  )
}

export default SidebarCrayons
