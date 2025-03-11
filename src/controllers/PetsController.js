import { petService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";

export class PetsController extends BaseController {

  constructor() {

    super('api/pets')
    this.router
      .get('', this.getAllPets)

  }
  async getAllPets(request, response, next) {

    try {
      const pets = await petService.getAllHouses()
      response.send(pets)

    } catch (error) {
      next(error)
    }


  }



}