import * as React from 'react'
import styled from '@emotion/styled'
import Color from 'color'

import {
  BREAKPOINTS,
  FONT_COLOR,
  PHOTO_HEIGHT_DEFAULT_PERCENT,
  PHOTO_HEIGHT_TINY_PERCENT,
  PHOTO_WIDTH_SMALL_PERCENT,
  PHOTO_WIDTH_MEDIUM_PERCENT
} from '../globals'

import { HeadElement } from './components/head-element'
import { Photo } from './components/photo'
import { PersonalLinks } from './components/personal-links'

const BodyElement = styled.body`
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

const ContentWrapper = styled.div`
  display: flex;
  height: ${100 - PHOTO_HEIGHT_DEFAULT_PERCENT}%;
  padding: 1em;

  @media (min-width: ${BREAKPOINTS.tiny}) {
    height: ${100 - PHOTO_HEIGHT_TINY_PERCENT}%;
  }

  @media (min-width: ${BREAKPOINTS.small}) {
    justify-content: center;
    align-items: center;
    height: auto;
    width: ${100 - PHOTO_WIDTH_SMALL_PERCENT}%;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    width: ${100 - PHOTO_WIDTH_MEDIUM_PERCENT}%;
    padding: 2em;
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    padding: 3em;
  }
`

const Content = styled.div`
  max-width: 800px;
`

const List = styled.ul`
  padding-left: 1em;
`

const Link = styled.a`
  color: inherit !important;
  text-decoration: underline;
`

export const Page: React.FC = () => (
  <html lang='en'>
    <HeadElement />

    <BodyElement>
      <Photo />
      <ContentWrapper>
        <Content>
          <p>
            <strong>Matt Lucock</strong> is
            <List>
              <li>
                a web developer and programmer from the Central Coast and Sydney, Australia.
              </li>
              <li>
                a young mental health advocate and{' '}
                <Link
                  href='https://headspace.org.au/about-us/headspace-youth-national-reference-group/#Matt-Lucock'
                  target='_blank'
                >
                  member of the Youth National Reference Group
                </Link>{' '}
                at headspace National Youth Mental Health Foundation.
              </li>
            </List>
          </p>
          <PersonalLinks />
        </Content>
      </ContentWrapper>
    </BodyElement>
  </html>
)
