import React from 'react'
import Link from 'next/link'

import CardBox from 'elements/CardBox'

import * as S from './styled'

import { Heart } from 'icons'

export const Posts = () => {
  return (
    <S.Section>
      <CardBox image="/img/post_image.png">
        <S.AvatarWrapper>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s---IZzZWuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/291004/75d3162c-6ab1-4124-a936-4e0522ceb0bc.jpeg"
            alt="Imagem do Author"
          />
          <div className="texts-avatarWrapper">
            <label>Ruurtjan</label>
            <small>Mar 17</small>
          </div>
        </S.AvatarWrapper>

        <S.BoxInfoWrapper>
          <Link href="/">
            <a>
              <h1>I quit my job to make free web tools</h1>
            </a>
          </Link>

          <S.TagLinksWrapper>
            <S.HashButton color="#41C4FF">
              <span>#</span>showdev
            </S.HashButton>
            <S.HashButton color="#FEFFA5">
              <span>#</span>productivity
            </S.HashButton>
            <S.HashButton color="#01476E">
              <span>#</span>carrer
            </S.HashButton>
            <S.HashButton color="#57D700">
              <span>#</span>news
            </S.HashButton>
          </S.TagLinksWrapper>

          <S.RelationshipWrapper>
            <div className="left-RelationshipWrapper">
              <button>{Heart} reactions</button>
              <button>#news</button>
            </div>

            <div className="right-RelationshipWrapper">
              <small>5 min read</small>
              <button>Save</button>
            </div>
          </S.RelationshipWrapper>
        </S.BoxInfoWrapper>
      </CardBox>

      <CardBox>
        <S.AvatarWrapper>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s---IZzZWuM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/291004/75d3162c-6ab1-4124-a936-4e0522ceb0bc.jpeg"
            alt="Imagem do Author"
          />
          <div className="texts-avatarWrapper">
            <label>Ruurtjan</label>
            <small>Mar 17</small>
          </div>
        </S.AvatarWrapper>

        <S.BoxInfoWrapper>
          <Link href="/">
            <a>
              <h1>I quit my job to make free web tools</h1>
            </a>
          </Link>

          <S.TagLinksWrapper>
            <S.HashButton color="#41C4FF">
              <span>#</span>showdev
            </S.HashButton>
            <S.HashButton color="#FEFFA5">
              <span>#</span>productivity
            </S.HashButton>
            <S.HashButton color="#01476E">
              <span>#</span>carrer
            </S.HashButton>
            <S.HashButton color="#57D700">
              <span>#</span>news
            </S.HashButton>
          </S.TagLinksWrapper>

          <S.RelationshipWrapper>
            <div className="left-RelationshipWrapper">
              <button>{Heart} reactions</button>
              <button>#news</button>
            </div>

            <div className="right-RelationshipWrapper">
              <small>5 min read</small>
              <button>Save</button>
            </div>
          </S.RelationshipWrapper>
        </S.BoxInfoWrapper>
      </CardBox>
    </S.Section>
  )
}

export default Posts
