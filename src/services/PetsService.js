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


  async getPetByQuery(petQuery) {
    const pageNumber = parseInt(petQuery.page) || 1
    const petLimit = 5
    const skipAmount = pageNumber * petLimit - petLimit
    delete petQuery.page

    const sortBy = petQuery.sort
    delete petQuery.sort


    const pets = await dbContext.Pets
      .find(petQuery)
      .limit(petLimit)
      .skip(skipAmount)
      .sort(sortBy)
      .populate('creator')


    return pets
  }


}



export const petService = new PetsService()