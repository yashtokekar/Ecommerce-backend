const Sub = require('../models/sub');
const slugify = require("slugify");

exports.create = async (req,res) => {
    try{
        const {name} = req.body;
        const category = await new Sub({name, slug: slugify(name)}).save();

        res.json(category);
    }catch (err) {
        res.status(400).send("Create sub category failed");
    };
};

exports.list = async (req,res) => {
    const category = await Sub.find({}).sort({createdAt: -1}).exec();
    res.json(sub);
};

exports.read = async (req,res) => {
    let sub = await Sub.findOne({slug: req.params.slug}).exec();
    res.json(sub);
};

exports.update = async (req,res) => {
    const {name} = req.body;
    try{
        const updated = await Sub.findOneAndUpdate({slug: req.params.slug},{name,slug: slugify(name)},{new: true});
        res.json(updated);

    }catch(err){
        console.log(err);
        res.status(400).send("Subcategory update failed")
    }
};

exports.remove = async (req,res) => {
    try{
        const deleted = await Sub.findOneAndDelete({slug: req.params.slug});
        res.json(deleted);

    }catch(err){
        res.status(400).send("Subcategory delete failed");
    }
};