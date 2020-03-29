import * as React from 'react'

import { CSS_FILE_PATH } from '../../globals'

export const HeadElement: React.FC = () => (
  <head>
    <meta charSet='utf8' />
    <title>Matt Lucock</title>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta name='description' content='Matt Lucock is a programmer and front-end web developer from the Central Coast and Sydney, Australia.' />
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap' />
    <link rel='stylesheet' href={CSS_FILE_PATH} />
  </head>
)
