import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { readdir } from 'node:fs/promises'
import { generateProjectCards } from './utils/projectUtils'

const app = new Hono()

app.use('/projects/*', serveStatic({ root: './' }))
app.use('/assets/*', serveStatic({ root: './' }))

app.get('/', async (c) => {
  const projects = await readdir('./projects', { withFileTypes: true })

  const projectList = projects
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const template = await Bun.file('./src/templates/index.html').text()

  const projectsHtml = generateProjectCards(projectList)

  const html = template.replace('{{PROJECTS}}', projectsHtml)

  return c.html(html)

});

const port = process.env.PORT || 3000

export default {
  port,
  fetch: app.fetch,
}