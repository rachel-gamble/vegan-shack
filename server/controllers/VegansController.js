import BaseController from "../utils/BaseController.js"
import { vegansService } from "../services/VegansService.js"

export class VegansController extends BaseController {
    constructor() {
        super('api/vegans')
        this.router
            .get('', this.getAllVegans)
            .get('/:id', this.getOneVegan)
            .post('', this.createVegan)
            .delete('/:id', this.remove)
    }


    async getAllVegans(req, res, next) {
        try {
            const vegans = await vegansService.getAllVegans()
            return res.send(vegans)
        } catch (error) {
            next(error)
        }
    }

    async getOneVegan(req, res, next) {
        try {
            const vegan = await vegansService.getOneVegan(request.params.id)
            return response.send({ vegan, message: 'Enjoy your harmless food!' })
        } catch (error) {
            next(error)
        }
    }

    async createVegan(req, res, next) {
        try {
            const newVegan = await vegansService.createVegan(request.body)
            return response.send(newVegan)
        } catch (error) {
            next(error)
        }
    }



}