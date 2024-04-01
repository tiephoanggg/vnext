import { ValidationErrorItem } from 'sequelize';
import { Teacher } from '../models/Teacher'
import bcrypt from "bcryptjs"

// const Teacher = createTeacherModel(sequelize, DataTypes);

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.status(200).json({ status: 200, data: teachers });
    } catch (error) {
        res.status(404).json({ status: 404, message: 'NOT FOUND' });
    };
};

const createTeacher = async (req, res) => {
    try {

        // SLECT * FROM TEACHER -> DATA
        // SS DATA === BODY.USER
        const teachers = await Teacher.create(req.body);
        console.log(teachers)
        res.status(201).json({ status: 201, data: teachers });
    } catch (error) {
        console.log(error.name);
        if (error.name === "SequelizeValidationError") {
            return res.status(404).json({ status: 404, message: error.message });
        } else if (error.name === "SequelizeUniqueConstraintError") {
            return res
                .status(404)
                .json({ status: 404, message: "Duplicate entry for unique field" });
        } else {
            return res.status(400).json({ status: 400, message: error.message });
        }
    }
    // console.log(error.name, 'error');
    // res.status(500).json({ status: 500, message: error.message });
};

const DeleteTeacher = async (req, res) => {
    try {
        const teacherID = req.params.id;
        const getTeacherID = await Teacher.findByPk(teacherID);
        if (!getTeacherID) {
            return res.status(404).json({ status: 404, message: " TEACHER NOT FOUND!!" })
        }
        getTeacherID.destroy();
        res.status(200).json({ status: 200, data: getTeacherID })
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message })
    };

};
const UpdateTeacher = async (req, res) => {
    try {
        const id = req.params.id;
        // const user = await User.findOne({ where: { id } });
        const teacher = await Teacher.findByPk(id);
        if (!teacher) {
            return res.status(404).json({ status: 404, message: " TEACHER NOT FOUND!!" })
        }
        await teacher.update(req.body);
        res.status(200).json({ status: 200, data: teacher });
    } catch (error) {
        res.status(400).json({ status: 400, message: error.message });
    };
};

const getTeacher = async (req, res) => {
    try {
        const teacher = req.params.id;
        if (isNaN(teacher)) {
            return res.status(404).json({ status: 404, message: "ID MUST BE NUMBER" })
        }
        const getUserID = await Teacher.findByPk(teacher);
        // if (!getUserID) {
        //     return res.status(404).json({ status: 404, message: " TEACHER NOT FOUND!!" })
        // }
        res.status(200).json({ status: 200, data: getUserID })
    } catch (error) {

        res.status(500).send('NOT FOUND TEACHER !!');
    }

};

export { getTeachers, createTeacher, DeleteTeacher, UpdateTeacher, getTeacher };