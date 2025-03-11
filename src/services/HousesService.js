import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"

class HouseService {

  getAllHouses() {

    const houses = dbContext.Houses.find()
    return houses

  }

  getHouseById(houseId) {
    const house = dbContext.Houses.findById(houseId)

    if (house == null) {
      throw new BadRequest(`${houseId} does not exist`);
    }
    return house
  }

  getHousesByQuery(houseQuery) {
    const houses = dbContext.Houses.find(houseQuery)
    return houses
  }
}


export const housesService = new HouseService()