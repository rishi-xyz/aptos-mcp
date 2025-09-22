import { Hono } from 'hono'

const PORT = process.env.PORT || 3000;

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const server = {
  port: PORT,
  fetch: app.fetch,
}

export default server;
