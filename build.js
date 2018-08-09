'use strict'

const {promisify} = require('util')
const {tasks} = require('ygor')
const {readFile, outputFile, copy} = require('fs-extra')
const pug = require('pug')
const sass = promisify(require('node-sass').render)
const minifyCSS = require('csso').minify

const html = async () => {
  const html = pug.render(
    await readFile('src/index.pug', 'utf8'),
    {filename: 'src/index.pug'}
  )
  await outputFile('dist/index.html', html)
}

const css = async () => {
  const files = await Promise.all([
    readFile('node_modules/ress/ress.css', 'utf8'),
    sass({file: 'src/main.sass'}).then(({css}) => String(css))
  ])

  const {css} = minifyCSS(files.join(''))
  await outputFile('dist/main.css', css)
}

const img = () => copy('profile.jpg', 'dist/profile.jpg')
const cname = () => copy('CNAME', 'dist/CNAME')

const build = () => Promise.all([html(), css(), img(), cname()])

tasks
  .add('html', html)
  .add('css', css)
  .add('img', img)
  .add('cname', cname)
  .add('default', build)
