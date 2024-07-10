import Admin from '../models/Admin.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerAdmin = async (req, res) => {
  const { username, password } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newAdmin = new Admin({ username, password: hashedPassword })
    await newAdmin.save()
    res.status(201).json(newAdmin)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body
  try {
    const admin = await Admin.findOne({ username })
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }
    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }
    const token = jwt.sign({ id: admin._id }, 'jwtSecret', { expiresIn: '1h' })
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
