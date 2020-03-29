import * as React from 'react'
import styled from '@emotion/styled'
import Color from 'color'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
  faTwitter as fabTwitter
} from '@fortawesome/free-brands-svg-icons'

import { CSS_FILE_PATH, PHOTO_PATH } from './globals'

const FONT_COLOR = 'white'

const BREAKPOINTS: { readonly [name: string]: string } = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px'
}

interface Links {
  readonly [name: string]: {
    readonly url: string
    readonly icon: IconDefinition
  }
}

const LINKS: Links = {
  linkedin: { url: 'https://linkedin.com/in/matthewlucock', icon: fabLinkedin },
  github: { url: 'https://github.com/matthewlucock', icon: fabGithub },
  twitter: { url: 'https://twitter.com/matthewlucock', icon: fabTwitter },
  email: { url: 'mailto:hello@matthewlucock.name', icon: farEnvelope }
}

const Body = styled.body`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${Color('black').lightness(5).toString()};
  color: ${FONT_COLOR};
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  line-height: 1.5;

  @media (min-width: ${BREAKPOINTS.small}) {
    flex-direction: row;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    font-size: 25px;
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    font-size: 30px;
  }
`

const Photo = styled.div`
  height: 50%;
  background-image: url(${PHOTO_PATH});
  background-position: center;
  background-size: cover;

  @media (min-width: ${BREAKPOINTS.tiny}) {
    height: 60%;
  }

  @media (min-width: ${BREAKPOINTS.small}) {
    height: auto;
    width: 50%;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    width: 40%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  height: 50%;
  padding: 1em;

  @media (min-width: ${BREAKPOINTS.tiny}) {
    height: 40%;
  }

  @media (min-width: ${BREAKPOINTS.small}) {
    justify-content: center;
    align-items: center;
    height: auto;
    width: 50%;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    width: 60%;
    padding: 2em;
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    padding: 3em;
  }
`

const Content = styled.div`
  max-width: 800px;
`

const LinksWrapper = styled.div`
  margin-top: 1em;
`

const Link = styled.a`
  display: inline-block;
  color: ${Color(FONT_COLOR).darken(0.7).toString()};
  transition: color .2s;

  &:not(:last-child) {
    margin-right: .75em;
  }

  &:hover, &:focus {
    color: inherit;
  }

  &:focus {
    outline: none;
  }
`

const LinkIcon = styled(FontAwesomeIcon)`
  height: 2em;
`

export const Page: React.FC = () => (
  <html lang='en'>
    <head>
      <meta charSet='utf8' />
      <title>Matt Lucock</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Matt Lucock is a programmer and front-end web developer from the Central Coast and Sydney, Australia.' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans&display=swap' />
      <link rel='stylesheet' href={CSS_FILE_PATH} />
    </head>

    <Body>
      <Photo />
      <ContentWrapper>
        <Content>
          <p>
            <strong>Matt Lucock</strong> is a programmer and front-end web developer from the
            Central Coast and Sydney, Australia.
          </p>

          <LinksWrapper>
            {Object.entries(LINKS).map(([name, { url, icon }]) => (
              <Link key={name} href={url} target='_blank' aria-label={name}>
                <LinkIcon icon={icon} />
              </Link>
            ))}
          </LinksWrapper>
        </Content>
      </ContentWrapper>
    </Body>
  </html>
)
