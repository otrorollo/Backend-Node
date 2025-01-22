import { I18n } from 'i18n'
import path from 'node:path'
import { __dirname } from './utils.js'

const i18n = new I18n({
  locales: ['en', 'es'], // Idiomas soportados
  directory: path.join(__dirname, '..', 'locales'), // Directorio de archivos de traducción
  defaultLocale: 'en', // Idioma por defecto
  autoReload: true, // Recarga automática de archivos de traducción
  syncFiles: true, // Sincronización de archivos de traducción
  cookie: 'nodeapp-locale', 
  // Nombre de la cookie (debe coincidir con el usado en el controlador) 
  //  Solo cookie, sin queryParameter
})

export default i18n