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

  async getHousesByQuery(houseQuery) {
    const pageNumber = parseInt(houseQuery.page) || 1
    const houseLimit = 10
    const skipAmount = pageNumber * houseLimit - houseLimit
    delete houseQuery.page

    const sortBy = houseQuery.sort
    delete houseQuery.sort

    const houses = await dbContext.Houses
      .find(houseQuery)
      .sort(sortBy)
      .limit(houseLimit)
      .skip(skipAmount)


    return houses
  }
}


export const housesService = new HouseService()