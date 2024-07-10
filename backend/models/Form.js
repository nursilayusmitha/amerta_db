import mongoose from 'mongoose'

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  noKTP: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  package: { type: String, required: true }
})

const Form = mongoose.model('Form', FormSchema)
export default Form
