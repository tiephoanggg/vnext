import express from 'express';
import { getTeachers, createTeacher, DeleteTeacher, UpdateTeacher, getTeacher } from '../controllers/TeacherController';

const router = express.Router();


router.get('/:id', getTeacher)
router.get('/', getTeachers);
router.post('/', createTeacher);
router.delete('/:id', DeleteTeacher);
router.put('/:id', UpdateTeacher)
module.exports = router;