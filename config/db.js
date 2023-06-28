import  Sequelize  from "sequelize"

const db = new Sequelize('Name','User','pass',{
    host: 'localhost',
    port: 3000,
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatroAliases: false
});

export default db;