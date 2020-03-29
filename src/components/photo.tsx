import styled from '@emotion/styled'

import {
  PHOTO_PATH,
  BREAKPOINTS,
  PHOTO_HEIGHT_DEFAULT_PERCENT,
  PHOTO_HEIGHT_TINY_PERCENT,
  PHOTO_WIDTH_SMALL_PERCENT,
  PHOTO_WIDTH_MEDIUM_PERCENT
} from '../../globals'

export const Photo = styled.div`
  height: ${PHOTO_HEIGHT_DEFAULT_PERCENT}%;
  background-image: url(${PHOTO_PATH});
  background-position: center;
  background-size: cover;

  @media (min-width: ${BREAKPOINTS.tiny}) {
    height: ${PHOTO_HEIGHT_TINY_PERCENT}%;
  }

  @media (min-width: ${BREAKPOINTS.small}) {
    height: auto;
    width: ${PHOTO_WIDTH_SMALL_PERCENT}%;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    width: ${PHOTO_WIDTH_MEDIUM_PERCENT}%;
  }
`
