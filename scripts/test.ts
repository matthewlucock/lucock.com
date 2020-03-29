import execa from 'execa'

import { PUBLIC_DIRECTORY } from '../globals'

execa('npx', ['html-validate', PUBLIC_DIRECTORY]).catch((error): void => {
  console.error(error.stdout)
  process.exit(1)
})
