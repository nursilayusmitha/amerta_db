import express from 'express'
import { createForm, getForms, updateForm, deleteForm } from '../controllers/formController.js'

const router = express.Router()

router.post('/forms', createForm)
router.get('/forms', getForms)
router.put('/forms/:id', updateForm)
router.delete('/forms/:id', deleteForm)

export default router
