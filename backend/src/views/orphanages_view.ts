import Orphanage from "../models/Orphanage";
import imagesView from "./images_view";

export default {
  render(orphanage: Orphanage) {  // Gets an orphanage and renders it so that it can be viewed in the frontend
      return {
          id: orphanage.id,
          name: orphanage.name,
          latitude: orphanage.latitude,
          longitude: orphanage.longitude,
          about: orphanage.about,
          instructions: orphanage.instructions,
          opening_hours: orphanage.opening_hours,
          open_on_weekends: orphanage.open_on_weekends,
          images: imagesView.renderMany(orphanage.images)
      };
  },

  renderMany(orphanages: Orphanage[]) {
      return orphanages.map(orphanage => this.render(orphanage))
  }

};