import { dbContext } from "../db/DbContext.js"

class HouseService {

  getAllHouses() {

    const houses = dbContext.Houses.find()
    return houses

  }

}


export const housesService = new HouseService()