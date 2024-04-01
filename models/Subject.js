'use strict';
import { sequelize, DataTypes } from "../db"
import { Student_subject } from "./Student_subject";
import { Teacher } from "./Teacher";
const Subject = sequelize.define('subject', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
});
Subject.hasMany(Student_subject, { foreignKey: 'subject_id' })

export { Subject }

