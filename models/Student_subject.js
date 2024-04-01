'use strict';
import { sequelize, DataTypes } from '../db'
import { Teacher } from './Teacher';
const Student_subject = sequelize.define('student_subject', {
  student_id: {
    type: DataTypes.INTEGER
  },
  teacher_id: {
    type: DataTypes.INTEGER
  },
  subject_id: {
    type: DataTypes.INTEGER
  },
})
export { Student_subject }