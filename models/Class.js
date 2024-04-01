'use strict';
import { sequelize, DataTypes } from "../db"
import { Classroom } from "./Classroom";
import { Teacher } from "./Teacher";
const Class = sequelize.define('class', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  teacher_id: {
    type: DataTypes.INTEGER
  },
  classroom_id: {
    type: DataTypes.INTEGER
  },
  date: {
    type: DataTypes.STRING
  },
  time_in: {
    type: DataTypes.STRING
  },
  time_out: {
    type: DataTypes.STRING
  },
});
Class.belongsTo(Classroom, { foreignKey: 'classroom_id' });
// Class.belongsTo(Teacher, { foreignKey: 'teacher_id' });

export { Class }
