const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('memberpassword', {
    companyId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    memberId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'member',
        key: 'memberId'
      }
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'memberpassword',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "companyId" },
          { name: "memberId" },
        ]
      },
      {
        name: "memberId",
        using: "BTREE",
        fields: [
          { name: "memberId" },
        ]
      },
    ]
  });
};
