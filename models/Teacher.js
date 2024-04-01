import { sequelize, DataTypes } from "../db"
import bcrypt from "bcryptjs"
import Student_subject from "./Student_subject";
import { Class } from "./Class";
import { Subject } from "./Subject";

const Teacher = sequelize.define('teacher', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: "username đã tồn tại!"
      },
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 16],
        msg: "Mật khẩu phải từ 8-16 ký tự  "
      }

    }
  },
  subject_id: {
    type: DataTypes.INTEGER
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
  },
});
// (async () => {
//   await sequelize.sync({});
//   // Code here
// })();

// Teacher.beforeCreate(async (teacher, options) => {
//   try {
//     const hashedPassword = await bcrypt.hash(teacher.password, 10);
//     // Ghi đè mật khẩu gốc bằng mật khẩu đã mã hóa
//     teacher.password = hashedPassword;
//   } catch (error) {
//     throw error;
//   }
// });

Teacher.hasMany(Class, {
  foreignKey: 'teacher_id'
});
export { Teacher }















