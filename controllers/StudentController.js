import { Student } from "../models/Student";

const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students)
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not found student!!" })
    }
}

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        res.status(500).json({ status: 500, message: "CAN NOT CREATE !!" })
    }
}
const deleteStudent = async (req, res) => {
    try {
        const studentID = req.params.id;
        const student = await Student.findByPk(studentID);
        if (!student) {
            return res.status(404).json({ status: 404, message: "NOT FOUND STUDENT!!" });
        }
        student.destroy();
        res.json(student);
    } catch (error) {
        res.status(500).json({ status: 500, message: "CAN NOT DELETE !!" })

    }
}
const updateStudent = async (req, res) => {
    try {
        const studentID = req.params.id;
        const student = await Student.findByPk(studentID);
        if (!student) {
            return res.status(404).json({ status: 404, message: "NOT FOUND STUDENT!!" })
        }
        await student.update(req.body);
        res.json(student)
    } catch (error) {
        res.status(500).json({ status: 500, message: "CAN NOT UPDATE !!" })

    }
}

const getStudent = async (req, res) => {
    try {
        const studentID = req.params.id;
        const student = await Student.findByPk(studentID);
        if (!student) {
            return res.status(404).json({ status: 404, message: "NOT FOUND STUDENT!!" })
        }
        res.json(student)
    } catch (error) {
        res.status(500).json({ status: 500, message: "CAN NOT UPDATE !!" })
    }
}
export { getStudents, createStudent, deleteStudent, updateStudent, getStudent }