import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"


class VegansService {
    async getAllVegans() {
        const vegans = await dbContext.Vegans
        return vegans
    }

    async getOneVegan(veganId){
        const vegan = await dbContext.Vegans.find(v => v.id == veganId)
        if (!vegan) throw new BadRequest('no vegan food named ' + veganId)
        return vegan
    }

    async createVegan(newVegan) {
        logger.log(newBurger)
        newBurger.id = dbContext.Vegans[dbContext.Vegans.length -1].id +1
        await dbContext.Vegans.push(newBurger)

        const vegan = await this.getOneVegan(burgerId)
        let index = dbContext.Vegans.indexOf(vegan)
        dbContext.Vegans.splice(index, 1)
        return `${vegan.name} removed. you can't eat her now`
    
        }
    }

export const vegansService = new VegansService