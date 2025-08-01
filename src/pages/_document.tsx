import React from 'react'
import theme from '@/config/theme'
import { NextComponentType } from 'next'
import { AppInitialProps } from 'next/app'
import { EmotionCache } from '@emotion/cache'
import { createEmotionCache } from '@/utils'
import createEmotionServer from '@emotion/server/create-instance'
import { AppContextType, AppPropsType } from 'next/dist/shared/lib/utils'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

interface DocumentProps {
  emotionStyleTags: React.ReactElement[] // <-- note: use emotionStyleTags for consistency below!
}

class MyDocument extends Document<DocumentProps> {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.background.paper} />
          <meta content="#fbfbfb" name="theme-color" />
          <meta content="#fbfbfb" name="msapplication-navbutton-color" />
          <meta content="#fbfbfb" name="apple-mobile-web-app-status-bar-style" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="yes" name="mobile-web-app-capable" /> {/* <-- added this line */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      enhanceApp: (
        App: NextComponentType<AppContextType, AppInitialProps, AppPropsType & { emotionCache: EmotionCache }>
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}

export default MyDocument
