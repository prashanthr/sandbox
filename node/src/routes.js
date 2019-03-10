import { db } from './data'

const routes = (app) => {
  app.get('/', (req, res) => res.send('Hello World!'))

  app.get('/db/:collectionName', async (req, res) => {
    const data = await db.get(req.params.collectionName)
    console.log('data', data)
    return res.send(data)
  })

  app.post('/db/:collectionName', async (req, res) => {
    const data = await db.put(req.params.collectionName,req.body)
    console.log('data', data)
    return res.send('ok')
  })
}

export default routes
