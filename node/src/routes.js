import { db } from './data'
import multer from 'multer'
const upload = multer({ dest: './uploads/' })

const routes = (app) => {
  
  app.get('/', (req, res) => res.send('Hello World!'))
  app.get('/home', (req, res) => res.sendFile(__dirname + '/client/index.html'))

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

  app.post('/upload', upload.array('file'), async (req, res) => {
    console.log('req.files', req.files)
    console.log('req.body', req.body)
    res.send('ok')
  })

  app.get('/download', async (req, res) => {
    
  })
}

export default routes
