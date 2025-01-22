export function changeLocale(req, res, next) { 
  console.log('Entrando a /change-locale'); // <--- Verifica si esto se imprime
  //middleware
  // const locale = req.params.locale //obtiene el parámetro de la URL
  const locale = req.query.locale
  // poner una cookie en la respuesta
  res.cookie('nodeapp-locale', locale, {
    maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
  })
  // redirigir a la misma página en la que estaba
  res.redirect('back')
}