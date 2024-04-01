import express from 'express'
import { getClassrooms, createClassroom, deleteClassroom, updateClassroom, getClassroom } from '../controllers/ClassroomController'

const router = express.Router();
router.get('/', getClassrooms);
router.post('/', createClassroom);
router.delete('/:id', deleteClassroom);
router.put('/:id', updateClassroom);
router.get('/:id', getClassroom);
module.exports = router;