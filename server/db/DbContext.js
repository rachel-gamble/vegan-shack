import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema); 
    Vegans = [
        {
            id: 1,
            name: 'vegan biscuits and gravy',
            description: 'no pigs were hurt in the making of this gravy!',
            price: '8'
        },
        {
          id: 2,  
          name: 'cotton candy watermelon bowl',
            description: 'it tastes like heavenly cotton-candy, in guilt-free slushy fruit form',
            price: '7',
        },
        {
          id: 3,
            name: 'vegan nachos',
            description: 'fresh homemade tortilla chips covered with black means, cashew cheese, vegan sour cream, and guacamole'
        }
    ]

}

export const dbContext = new DbContext()
