'use strict';
import { sequelize, DataTypes } from "../db"
import { Student_subject } from "./Student_subject";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

const Student = sequelize.define('student', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 15]
    }
  },
  gender: {
    type: DataTypes.STRING
  },
  dateofbirth: {
    type: DataTypes.STRING
  },
  phonenumber: {
    type: DataTypes.INTEGER
  },
  address: {
    type: DataTypes.STRING
  }
});
Student.belongsToMany(Subject, { through: Student_subject })
Student.belongsToMany(Teacher, { through: Student_subject })
export { Student };