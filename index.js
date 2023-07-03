//Archivo principal, se encarga de llamar todos los demas archivos de la app

//Importacion con metodo EMACS
import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

//Crear app
const app = express() 



// Conexión a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexión Correcta a la Base de datos')
} catch (error) {
    console.log(error)
}


//Habilitar Pug Nota: Template Engine Monolitica
app.set('view engine', 'pug')//Set para agregar configuracion
app.set('views', './views')

//Carpeta Publica
app.use(express.static('public'))


//Routing
//app.get('/', usuarioRouter) //.get busca la ruta en especifico
app.use('/auth', usuarioRoutes) //.use busca todas lar rutas que empiezen con una diagonal; Este es el middel where


//Definir un puerto y arrancanque del proyecto
const port = 3000
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el ${port}`)
})