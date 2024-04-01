import { sequelize, DataTypes } from "../db"
const Test = sequelize.define('test', {
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
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [8, 16]
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
(async () => {
    await sequelize.sync({ force: true });
    // Code here
})();
export { Test }
