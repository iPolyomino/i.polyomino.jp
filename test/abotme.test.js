import test from 'ava'
import {Nuxt, Builder} from 'nuxt'
import {resolve} from 'path'

let nuxt = null

// Init Nuxt.js and start listening on localhost:4000
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try {
    config = require(resolve(rootDir, 'nuxt.config.js'))
  } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

test('Route /aboutme exits and render HTML', async t => {
  let context = {}
  const {html} = await nuxt.renderRoute('/aboutme', context)
  t.true(html.includes('<h1>Hagiについて</h1>'))
  t.true(html.includes('<h1>やってきたこと</h1>'))
  t.true(html.includes('© 2018 Hagi'))
})

test('Exists link', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
  const element = window.document.querySelector('a')
  t.not(element, null)
})

// Close the Nuxt server
test.after('Closing server', t => {
  nuxt.close()
})
