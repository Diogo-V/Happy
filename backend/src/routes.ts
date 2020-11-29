import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";
import multer from "multer";
import uploadConfig from "./config/upload";

// Defines our routes
const routes = Router();

// Gets our updated files
const upload = multer(uploadConfig);

// get = gets an information
// post = creates an information
// put = edits info
// delete = eliminates info
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);  // Creates orphanage. Can add images
routes.get("/orphanages", OrphanagesController.index);  // Gets all orphanages
routes.get("/orphanages/:id", OrphanagesController.show);  // Gets info about a specific orphanage

export default routes;
