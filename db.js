import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('db_class', 'postgres', 'jvemind2k10506', {
    host: 'localhost',
    dialect: 'postgres'
});
export { sequelize, DataTypes };
