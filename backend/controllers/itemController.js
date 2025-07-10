import itemModel from "../models/itemModel.js";
import fs from 'fs'

// all item list
const listItem = async (req, res) => {
    try {
        const items = await itemModel.find({})
        res.json({ success: true, data: items })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add item
const addItem = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const item = new itemModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
        })

        await item.save();
        res.json({ success: true, message: "Material Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete item
const removeItem = async (req, res) => {
    try {

        const item = await itemModel.findById(req.body.id);
        fs.unlink(`uploads/${item.image}`, () => { })

        await itemModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Item Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listItem, addItem, removeItem }