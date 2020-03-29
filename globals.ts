export const CSS_FILE_PATH = 'main.css'
export const PHOTO_PATH = 'assets/photo.jpg'
export const PUBLIC_DIRECTORY = 'public'

interface Breakpoints {
  readonly [name: string]: string
}

export const BREAKPOINTS: Breakpoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px'
}

export const FONT_COLOR = 'white'

export const PHOTO_HEIGHT_DEFAULT_PERCENT = 50
export const PHOTO_HEIGHT_TINY_PERCENT = 60
export const PHOTO_WIDTH_SMALL_PERCENT = 50
export const PHOTO_WIDTH_MEDIUM_PERCENT = 40
