import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER , process.env.DB_PASS , {
    host: process.env.DB_HOST,
    port: 1433,
    dialect: 'mssql',
    define: {
        timestamps: true
    },
    options: { 
      trustServerCertificate: true,
      } ,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 60000
    },
    operatorAliases: false
});

export default db;