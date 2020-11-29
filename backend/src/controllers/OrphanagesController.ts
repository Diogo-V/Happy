import { Request, Response } from "express";  // Imports our types
import { getRepository } from "typeorm";  // Tells our database how to insert each item
import Orphanage from "../models/Orphanage";  // Our orphanage model
import orphanagesView from "../views/orphanages_view";
import * as Yup from "yup";  // Performs validation

export default {

    // Gets info about one specific orphanage
    async show(request: Request, response: Response) {

        // Gets id from the request
        const { id } = request.params;

        const orphanageRepository = getRepository(Orphanage);

        // Gets one orphanage
        const orphanage = await orphanageRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(orphanagesView.render(orphanage));

    },

    // Gets all orphanages
    async index(request: Request, response: Response) {

        const orphanageRepository = getRepository(Orphanage);

        // Gets all orphanages
        const orphanages = await orphanageRepository.find({
            relations: ['images']
        });

        return response.json(orphanagesView.renderMany(orphanages));

    },

    // Creates table
    async create(request: Request, response: Response) {
        
        // Deconstructs the sent object and gets each element
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        // Creates a way of inserting an orphanage inside our database
        const orphanageRepository = getRepository(Orphanage);

        // Explicitly tells program that we get an array of files
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        // Orphanage data
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        };

        // Performs validation
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        })

        // Validates
        await schema.validate(data, {
            abortEarly: false,
        })

        // Creates an orphanage (without sending it ye)
        const orphanage = orphanageRepository.create(data);

        await orphanageRepository.save(orphanage);

        return response.status(201).json(orphanage);
    }
};
