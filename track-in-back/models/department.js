const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    companyId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'department',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
          { name: "companyId" },
        ]
      },
      {
        name: "companyId",
        using: "BTREE",
        fields: [
          { name: "companyId" },
        ]
      },
    ]
  });
};
