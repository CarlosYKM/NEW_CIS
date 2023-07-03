const formularioLogin = (request, respond) => {
    respond.render('auth/login', {
        pagina: 'Iniciar Sesión'
    })
    console.log(request.body)
}

export {
    formularioLogin
}