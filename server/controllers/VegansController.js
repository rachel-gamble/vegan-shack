import BaseController from "../utils/BaseController.js"
import { vegansService } from "../services/VegansService.js"
import { response } from "express"


export class VegansController extends BaseController {
    constructor() {
        super('api/vegans')
        this.router
            .get('', this.getAllVegans)
            .get('/:id', this.getOneVegan)
            .post('', this.createVegan)
            .delete('/:id', this.removeOne)
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
            const vegan = await vegansService.getOneVegan(req.params.id)
            return res.send({ vegan })
        } catch (error) {
            next(error)
        }
    }

    async createVegan(req, res, next) {
        try {
            const newVegan = await vegansService.createVegan(req.body)
            return res.send(newVegan)
        } catch (error) {
            next(error)
        }
    }

    async removeOne(req, res, next) {
        try {
            const message = await vegansService.removeOne(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

}