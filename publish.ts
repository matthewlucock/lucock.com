import { publish } from 'gh-pages'

import { PUBLIC_DIRECTORY } from './code/globals'

publish(PUBLIC_DIRECTORY, (error): void => {
  if (error) throw error
})
