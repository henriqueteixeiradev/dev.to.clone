import React from 'react'
import Link from 'next/link'

import CardBox from 'elements/CardBox'

import * as S from './styled'
import Button from 'elements/Button'

export const CreateAccount = () => {
  return (
    <S.Section>
      <CardBox>
        <S.Content>
          <h2>
            <Link href="/">
              <a>DEV Community</a>
            </Link>{' '}
            is a community of 816,656 amazing developers
          </h2>

          <p>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          <Button text="Create account" styled="primary" width="100%" />
          <Button text="Log in" styled="secundary" width="100%" />
        </S.Content>
      </CardBox>
    </S.Section>
  )
}

export default CreateAccount
