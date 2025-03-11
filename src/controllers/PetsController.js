import { petService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";

export class PetsController extends BaseController {

  constructor() {

    super('api/pets')
    this.router
      .get('', this.getAllPets)
      .get('/:petId', this.getPetById)

  }
  async getAllPets(request, response, next) {

    try {
      const pets = await petService.getAllHouses()
      response.send(pets)
    } catch (error) {
      next(error)
    }
  }

  async getPetById(request, response, next) {

    try {
      const petId = request.params.petId
      const pets = await petService.getPetById(petId)
      response.send(pets)
    } catch (error) {
      next(error)
    }

  }

}