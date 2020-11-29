import Image from "../models/Image";

export default {
    render(image: Image) {  // Gets an image and renders it so that it can be viewed in the frontend
        return {
            id: image.id,
            url: `https://localhost:8000/uploads/${image.path}`
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }

};