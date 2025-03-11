import { dbContext } from "../db/DbContext.js"

class PetsService {
  getAllHouses() {
    const pets = dbContext.Pets.find()
    return pets
  }



}



export const petService = new PetsService()