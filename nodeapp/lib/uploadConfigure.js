import multer from 'multer'
import path from 'node:path'


//Declaro una configuración de almacenamiento de los archivos subidos   
const storage = multer.diskStorage({
  /** Define el directorio de destino para los archivos */
  destination: function(req, file, callback) {
    const ruta = path.join(import.meta.dirname, '..', 'public', 'avatars') 
    callback(null, ruta)
  },

  filename: function(req, file, callback) {
    const filename = `${file.fieldname}-${Date.now()}-${file.originalname}`
    callback(null, filename)
  }
})

//Declaro una configuracion de upload "Subida" de archivos
const upload = multer({ storage })

export default upload