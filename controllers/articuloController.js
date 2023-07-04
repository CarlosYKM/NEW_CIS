//import Articulo from '../models/mantenimientoArticulo.js'

const panelArticulo = (request, respond) => {
    respond.render('mantenimientoArticulo/index', {
        pagina: 'Mantenimiento Aticulo'
    })
    
}

export {
    panelArticulo
}