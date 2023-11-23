const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto("trackIn", "root", "1234", {
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
    }
);
auto.run((err) => {
    if(err) throw err;
})

/*
const auto = new SequelizeAuto('database', 'user', 'pass', {
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    directory: './models',
    port: 'port',
    caseModel: 'c',
    caseFile: 'c',
    singularize: true,
    additional: {
        timestamps: false
    },
    tables: ['table1', 'table2', 'myschema.table3']
})
*/