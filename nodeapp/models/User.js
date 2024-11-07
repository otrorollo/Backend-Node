import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt' // Importamos bcrypt para el hash de contraseñas

// Definimos el esquema para el modelo de Usuario
const userSchema = new Schema({
  email: { type: String, unique: true }, // El email debe ser único
  password: String
})

/**
 * Método estático para hacer hash de una contraseña
 * @param {string} clearPassword - Contraseña en texto plano
 * @returns {Promise<string>} Contraseña hasheada
 */
userSchema.statics.hashPassword = function(clearPassword) {
  return bcrypt.hash(clearPassword, 7) // 7 es el número de rondas de salt
}

// Creamos el modelo User basado en el esquema
const User = mongoose.model('User', userSchema)

export default User