import React from 'react'
import Link from 'next/link'

import * as S from './styled'
import { Twitter, Facebook, Git, Instagram, Twitch } from 'icons'

export const SocialLinks = () => {
  return (
    <S.Section>
      <Link href="https://twitter.com/">
        <a target="_blank">{Twitter}</a>
      </Link>
      <Link href="https://facebook.com/">
        <a target="_blank">{Facebook}</a>
      </Link>
      <Link href="https://github.com/">
        <a target="_blank">{Git}</a>
      </Link>
      <Link href="https://instagram.com/">
        <a target="_blank">{Instagram}</a>
      </Link>
      <Link href="https://twitch.tv/">
        <a target="_blank">{Twitch}</a>
      </Link>
    </S.Section>
  )
}

export default SocialLinks
