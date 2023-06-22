//Archivo principal, se encarga de llamar todos los demas archivos de la app

//Importacion con metodo EMACS
import expres from 'express'

//Crear app
const app = express() 

//Habilitar Pug
app.set('view engine', 'pug')//Set para agregar configuracion
app.set('views', './views')

//Carpeta Publica
app.use(express.static('public'))


//Routing
//app.get('/', usuarioRouter) //.get busca la ruta en especifico
app.use('/auth', usuarioRouter) //.use busca todas lar rutas que empiezen con una diagonal; Este es el middel where


//Definir un puerto y arrancanque del proyecto
const port = 3000
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el ${port}`)
})