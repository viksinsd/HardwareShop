import express from 'express';
import { addItem, listItem, removeItem } from '../controllers/itemController.js';
import multer from 'multer';
const itemRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

itemRouter.get("/list",listItem);
itemRouter.post("/add",upload.single('image'),addItem);
itemRouter.post("/remove",removeItem);

export default itemRouter;