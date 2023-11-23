var DataTypes = require("sequelize").DataTypes;
var _companies = require("./companies");
var _company = require("./company");
var _department = require("./department");
var _member = require("./member");
var _memberpassword = require("./memberpassword");

function initModels(sequelize) {
  var companies = _companies(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var department = _department(sequelize, DataTypes);
  var member = _member(sequelize, DataTypes);
  var memberpassword = _memberpassword(sequelize, DataTypes);

  company.belongsToMany(member, { as: 'memberId_members', through: memberpassword, foreignKey: "companyId", otherKey: "memberId" });
  member.belongsToMany(company, { as: 'companyId_companies', through: memberpassword, foreignKey: "memberId", otherKey: "companyId" });
  department.belongsTo(company, { as: "company", foreignKey: "companyId"});
  company.hasMany(department, { as: "departments", foreignKey: "companyId"});
  member.belongsTo(company, { as: "company", foreignKey: "companyId"});
  company.hasMany(member, { as: "members", foreignKey: "companyId"});
  memberpassword.belongsTo(company, { as: "company", foreignKey: "companyId"});
  company.hasMany(memberpassword, { as: "memberpasswords", foreignKey: "companyId"});
  member.belongsTo(department, { as: "departmentCode_department", foreignKey: "departmentCode"});
  department.hasMany(member, { as: "members", foreignKey: "departmentCode"});
  memberpassword.belongsTo(member, { as: "member", foreignKey: "memberId"});
  member.hasMany(memberpassword, { as: "memberpasswords", foreignKey: "memberId"});

  return {
    companies,
    company,
    department,
    member,
    memberpassword,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
