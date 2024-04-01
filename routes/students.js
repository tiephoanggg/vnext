import express from "express"
import { getStudents, createStudent, deleteStudent, updateStudent, getStudent } from "../controllers/StudentController"

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);
router.get('/:id', getStudent)

module.exports = router;