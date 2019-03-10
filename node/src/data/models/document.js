import { Schema, SchemaType } from 'mongoose'

const Document = new Schema({
  personId: Schema.Types.ObjectId,
  data: 'buffer'
})

export default Document
