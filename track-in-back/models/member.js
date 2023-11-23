const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member', {
    memberId: {
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
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    departmentCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'department',
        key: 'code'
      }
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "memberId" },
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
      {
        name: "departmentCode",
        using: "BTREE",
        fields: [
          { name: "departmentCode" },
        ]
      },
    ]
  });
};
