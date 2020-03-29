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

import { FONT_COLOR } from '../../globals'

interface PersonalLinks {
  readonly [name: string]: {
    readonly url: string
    readonly icon: IconDefinition
  }
}

const LINKS: PersonalLinks = {
  linkedin: { url: 'https://linkedin.com/in/matthewlucock', icon: fabLinkedin },
  github: { url: 'https://github.com/matthewlucock', icon: fabGithub },
  twitter: { url: 'https://twitter.com/matthewlucock', icon: fabTwitter },
  email: { url: 'mailto:hello@matthewlucock.name', icon: farEnvelope }
}

const Wrapper = styled.div`
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

export const PersonalLinks: React.FC = () => (
  <Wrapper>
    {Object.entries(LINKS).map(([name, { url, icon }]) => (
      <Link key={name} href={url} target='_blank' aria-label={name}>
        <LinkIcon icon={icon} />
      </Link>
    ))}
  </Wrapper>
)
