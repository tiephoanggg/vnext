import { Class } from "../models/Class";

const getClasses = async (req, res) => {
    try {
        const classes = await Class.findAll();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not Found!!" });
    };
};
const createClass = async (req, res) => {
    try {
        const classes = await Class.create(req.body);
        res.json(classes);
    } catch (error) {
        console.log(error, 'error');
        res.status(500).json({ status: 500, message: "Không thể tạo mới !!!" });
    };
};
const deleteClass = async (req, res) => {
    try {
        const classID = req.params.id;
        const getClass = await Class.findByPk(classID);
        if (!getClass) {
            return res.status(404).json({ status: 404, message: " CLASS NOT FOUND!!" })
        }
        getClass.destroy();
        res.json(getClass);
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not Found Class" })
    }
}
const updateClass = async (req, res) => {
    try {
        const classID = req.params.id;
        const getClass = await Class.findByPk(classID);
        if (!getClass) {
            return res.status(404).json({ status: 404, message: " CLASS NOT FOUND!!" })
        }
        getClass.update(req.body);;
        res.json(getClass)
    } catch (error) {
        res.status(500).json({ status: 500, message: "Not Found Class" })

    };
};

const getClass = async (req, res) => {
    try {
        const classID = req.params.id;
        console.log(classID)
        if (!classID) {
            return res.status(404).json({ status: 404, message: " ID EMPTY !!" })
        }
        const getClass = await Class.findByPk(classID);
        if (!getClass) {
            return res.status(404).json({ status: 404, message: " CLASS NOT FOUND!!" })
        }
        res.json(getClass)
    } catch (error) {
        res.status(500).send('NOT FOUND CLASS !!');

    }
}

export { getClasses, createClass, deleteClass, updateClass, getClass }
