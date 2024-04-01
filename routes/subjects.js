import express from "express"
import { getSubjects, createSubject, deleteSubject, updateSubject, getSubject } from "../controllers/SubjectController"

const router = express.Router();
router.get('/', getSubjects);
router.post('/', createSubject);
router.delete('/:id', deleteSubject);
router.put('/:id', updateSubject);
router.get('/:id', getSubject)
module.exports = router;