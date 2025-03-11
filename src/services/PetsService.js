import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"

class PetsService {
  getAllHouses() {
    const pets = dbContext.Pets.find()
    return pets
  }


  getPetById(petId) {
    const pet = dbContext.Pets.findById(petId)

    if (pet == null) {
      throw new BadRequest(`${petId} does not exist`);
    }
    return pet
  }

}



export const petService = new PetsService()