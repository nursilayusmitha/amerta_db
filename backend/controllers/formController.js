import Form from '../models/Form.js'

export const createForm = async (req, res) => {
  try {
    const newForm = new Form(req.body)
    await newForm.save()
    res.status(201).json(newForm)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find()
    res.status(200).json(forms)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedForm)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteForm = async (req, res) => {
  try {
    await Form.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Form deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
