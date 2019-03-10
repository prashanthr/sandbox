import mongoose, { model } from 'mongoose'
import { config, getConnectionString } from './config'
import { Person, Document } from './models'

const getDBConnection = (instance) => instance.connect(getConnectionString(config), { useNewUrlParser: true })

class DB {
  constructor (instance) {
    this.instance = instance
    this.models = {}
  }

  async getInstance () {
    const connection = await getDBConnection(mongoose)
    return connection
  }

  async setupModels (instance) {
    // console.log(this.instance.model.toString())
    const model = instance.model
    this.models['person'] = instance.model('Person', new mongoose.Schema({
      firstName: 'String',
      lastName: 'String',
      dob: 'Date'
    }))
    // this.models['document'] = model('Document', Document)
  }

  async init () {
    this.instance = await this.getInstance()
    await this.setupModels(this.instance)
    console.log(this.instance)
  }

  async get (collectionName) {
    const name = collectionName.toLowerCase()
    switch (name) {
      case 'person':
        const person = await this.models[name].find().exec()
        return person
        break
      case 'document':
        break
      default:
        break
    }
  }

  async put (collectionName, data) {
    switch (collectionName.toLowerCase()) {
      case 'person':
        const person = new this.models['person']({
          ...data
        })
        await person.save()
      default:
        break
    }
  }
}
mongoose.connect(getConnectionString(config), { useNewUrlParser: true })
const db = new DB(mongoose)
export { db }
