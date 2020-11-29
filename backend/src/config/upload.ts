import multer from "multer";  // Use to storage/locate our images
import path from "path";  // Node module that gives a path

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, "..", "..", "uploads"),
        filename: (request, file, cb) => {
            // Creates a name for the file because if 2 people give the same file, it can get messy
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },
    })
};
