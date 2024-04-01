import express from "express"
import { getClasses, createClass, deleteClass, updateClass, getClass } from "../controllers/ClassController"

const router = express.Router();
router.get('/', getClasses);
router.post('/', createClass);
router.delete('/:id', deleteClass);
router.put('/:id', updateClass);
router.get('/:id', getClass);

module.exports = router;