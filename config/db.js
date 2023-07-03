import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS ?? '', {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5, //5 conexiones a la vez
        min: 0, // 0 Conexiones minimas
        acquire: 30000, //30 segunso para marcar una conexion antes de marcar un error
        idle: 10000 //10 segundos para cerrar la conexion en caso de inactividad
    }, 
    operatorAliases: false
});

export default db;
