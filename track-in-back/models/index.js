'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


fs
  .readdirSync(__dirname)
  .filter(function(file) {
    console.log(file)
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    const model = require(path.join(__dirname, file))(sequelize,Sequelize.DataTypes)
    db[model.name] = model;
    console.log('model.name:' + db[model.name]);  // 테스트로그 model명..
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    console.log(db[modelName]);
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;