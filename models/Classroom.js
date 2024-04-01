'use strict';
import { sequelize, DataTypes } from "../db"
const Classroom = sequelize.define('classroom', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  classname: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  student_quantity: {
    type: DataTypes.INTEGER
  },
});
export { Classroom }
