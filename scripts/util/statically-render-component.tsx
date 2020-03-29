import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { CacheProvider as EmotionCacheProvider } from '@emotion/core'
import createEmotionServer from 'create-emotion-server'
import createEmotionCache from '@emotion/cache'
import cheerio from 'cheerio'

interface StaticallyRenderedComponent {
  readonly html: string
  readonly css: string
}

export const staticallyRenderComponent = (
  Component: React.ComponentType
): StaticallyRenderedComponent => {
  const emotionCache = createEmotionCache()
  const { extractCritical } = createEmotionServer(emotionCache)

  let { html, css } = extractCritical(renderToStaticMarkup(
    <EmotionCacheProvider value={emotionCache}>
      <Component />
    </EmotionCacheProvider>
  ))

  // Feeding the HTML through `cheerio` is a simple method of correctly formatting the HTML
  // resulting from the JSX tree (e.g. ensuring correct closing of tags, capitalization of
  // attributes).
  html = cheerio.load(`<!DOCTYPE html>${html}`).html()

  return { html, css }
}
