import Usuario from '../models/mantenimientoUsuarios.js'

const formularioLogin = (request, respond) => {
    console.log(request.body),
    respond.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
    
}

export {
    formularioLogin
}