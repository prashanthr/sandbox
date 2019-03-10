import { Schema } from 'mongoose'

const Person = new Schema({
  firstName: 'String',
  lastName: 'String',
  dob: 'Date'
})

export default Person
