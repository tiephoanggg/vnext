import { Subject } from "../models/Subject";

const getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.json(subjects)
    } catch (error) {
        res.status(500).json({ status: 500, message: " NOT FOUND!!" })
    }
}

const createSubject = async (req, res) => {
    try {
        const subject = await Subject.create(req.body)
        res.json(subject)
    } catch (error) {
        res.status(500).json({ status: 500, message: " CAN NOT CREATE!!" })
    }
}

const deleteSubject = async (req, res) => {
    try {
        const subjectID = req.params.id;
        const subject = await Subject.findByPk(subjectID);
        if (!subject) {
            return res.status(404).json({ status: 404, message: "NOT FOUND SUBJECT" })
        }
        subject.destroy(req.body);
        res.json(subject);
    } catch (error) {
        res.status(500).json({ status: 500, message: " CAN NOT DELETE!!" })

    }
}
const updateSubject = async (req, res) => {
    try {
        const subjectID = req.params.id;
        const subject = await Subject.findByPk(subjectID);
        if (!subject) {
            return res.status(404).json({ status: 404, message: "NOT FOUND SUBJECT" });
        }
        subject.update(req.body);
        res.json(subject);
    } catch (error) {
        res.status(500).json({ status: 500, message: " CAN NOT UPDATE!!" });
    }
}
const getSubject = async (req, res) => {
    try {
        const subjectID = req.params.id;
        const subject = await Subject.findByPk(subjectID);
        if (!subject) {
            return res.status(404).json({ status: 404, message: "NOT FOUND SUBJECT" });
        }
        res.json(subject)
    } catch (error) {
        res.status(500).json({ status: 500, message: " NOT FOUND!!" });

    }
}
export { getSubjects, createSubject, deleteSubject, updateSubject, getSubject } 