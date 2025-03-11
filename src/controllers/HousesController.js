import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {

    super('api/houses')
    this.router
      .get('', this.getAllHouses)
      .get('/search', this.getHousesByQuery)
      .get('/:houseId', this.getHouseById)

  }

  async getAllHouses(request, response, next) {

    try {
      const houses = await housesService.getAllHouses()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async getHouseById(request, response, next) {

    try {
      const houseId = request.params.houseId
      const house = await housesService.getHouseById(houseId)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }

  async getHousesByQuery(request, response, next) {
    try {
      const houseQuery = request.query
      const houses = await housesService.getHousesByQuery(houseQuery)
      response.send(houses)
    } catch (error) {
      next(error)
    }


  }

}