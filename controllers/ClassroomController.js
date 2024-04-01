import { Classroom } from "../models/Classroom";

const getClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.findAll();
        console.log(classrooms)
        res.status(200).json({ status: 200, Data: classrooms })
    } catch (error) {
        res.status(500).json({ status: 500, message: 'NOT FOUND !!' });
    }
}
const createClassroom = async (req, res) => {
    try {
        const classrooms = await Classroom.create(req.body)
        res.status(200).json({ status: 200, Data: classrooms })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: 500, message: "Không thể tạo thêm mới !!!" });
    }
}
const deleteClassroom = async (req, res) => {
    try {
        const classroomID = req.params.id;
        const getClassroom = await Classroom.findByPk(classroomID);
        if (!getClassroom) {
            return res.status(404).json({ status: 404, message: " CLASSROOM NOT FOUND!!" })
        }
        getClassroom.destroy();
        res.json(getClassroom);
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not found " });
    }
}
const updateClassroom = async (req, res) => {
    try {
        const classroomID = req.params.id;
        const getClassroom = await Classroom.findByPk(classroomID);
        if (!getClassroom) {
            return res.status(404).json({ status: 404, message: " CLASSROOM NOT FOUND!!" })
        }
        await getClassroom.update(req.body);
        res.status(200).json(getClassroom);
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not found  classroom" });
    }
}
const getClassroom = async (req, res) => {
    try {

        const classroomID = req.params.id;
        console.log(classroomID)
        const classroom = await Classroom.findByPk(classroomID);
        if (!classroom) {
            return res.status(404).json({ status: 404, message: " CLASSROOM NOT FOUND!!" })
        }
        res.json(classroom)
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not found!!" })
    }
}
export { getClassrooms, createClassroom, deleteClassroom, updateClassroom, getClassroom }