const bcrypt = require('bcrypt');
const Parent = require('../schema/parentSchema');


const parentRegister = async (req, res) => {
    try {
        const admin = new Parent({
            ...req.body
        });

        const existingParentByEmail = await Parent.findOne({ email: req.body.email });
        const existingSchool = await Parent.findOne({ schoolName: req.body.schoolName });

        if (existingParentByEmail) {
            res.send({ message: 'Email already exists' });
        }
        else if (existingSchool) {
            res.send({ message: 'School name already exists' });
        }
        else {
            let result = await admin.save();
            result.password = undefined;
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const parentLogIn = async (req, res) => {
    if (req.body.email && req.body.password) {
        let parent = await Parent.findOne({ email: req.body.email });
        if (parent) {
            if (req.body.password === parent.password) {
                parent.password = undefined;
                res.send(admin);
            } else {
                res.send({ message: "Invalid password" });
            }
        } else {
            res.send({ message: "User not found" });
        }
    } else {
        res.send({ message: "Email and password are required" });
    }
};

const getParentDetail = async (req, res) => {
    try {
        let parent = await Parent.findById(req.params.id);
        if (parent) {
            parent.password = undefined;
            res.send(admin);
        }
        else {
            res.send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteParent = async (req, res) => {
    try {
        const deletedParent = await Parent.findByIdAndDelete(req.params.id);

        await Subject.updateOne(
            { parent: deletedParent._id, parent: { $exists: true } },
            { $unset: { parent: 1 } }
        );

        res.send(deletedParent);
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = {parentRegister,parentLogIn,getParentDetail,deleteParent};