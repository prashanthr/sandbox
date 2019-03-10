import { db } from './data'
import express from 'express'
import routes from './routes'

const PORT = 9099
const app = express()
routes(app)

app.listen(PORT, async () => {
  await db.init()
  console.log(`Example app listening on port ${PORT}!`)
})
