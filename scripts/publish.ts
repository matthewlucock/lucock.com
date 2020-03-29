import { publish } from 'gh-pages'

import { PUBLIC_DIRECTORY } from '../globals'

publish(PUBLIC_DIRECTORY, (error): void => {
  if (error) throw error
})
