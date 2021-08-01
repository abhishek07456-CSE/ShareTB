import multer from 'multer';
import os from 'os';
import Local from './Local';
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  os.tmpdir());
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        const app_name = Local.config().AppName;
        cb(null, `${app_name}-${file.fieldname}-${Date.now()}.${ext}`);
    },
});
const multerFilter = (req, file, cb) => {
    if (true) { //file.mimetype.split("/")[1] === "pdf"
        cb(null, true);
    } else {
        cb(new Error("Not a PDF File!!"), false);
    }
};
const uploadFile = multer({
    storage: multerStorage,
    limits: {fieldSize: 100000}
});
export default uploadFile;