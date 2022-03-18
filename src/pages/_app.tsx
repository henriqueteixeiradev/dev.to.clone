import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#252a36" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/practicaldev/image/fetch/s--E8ak4Hr1--/c_limit,f_auto,fl_progressive,q_auto,w_32/https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/practicaldev/image/fetch/s--E8ak4Hr1--/c_limit,f_auto,fl_progressive,q_auto,w_32/https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico" />
      </Head>
      <NextSeo
        title="DEV Community 👩‍💻👨‍💻"
        description="A constructive and inclusive social network for software developers. With you every step of your journey."
        canonical="https://site.com.br/"
        openGraph={{
          url: 'https://site.com.br/',
          title: 'DEV Community 👩‍💻👨‍💻',
          description: 'A constructive and inclusive social network for software developers. With you every step of your journey.',
          images: [
            {
              url: 'https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png'
            }
          ],
          site_name: 'DEV Community 👩‍💻👨‍💻',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@bellmont_sistema',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
