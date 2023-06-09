import {logger} from '../../../loggers/loggers.js'

class UsersManagerMongo {
    constructor(model) {
        this.model = model
    }

    async addUser(user) {
        try {
            await this.model.create(user);
        } catch (error) {
            logger.error(error)
        }
        
    }

    async getUser(userData) {
        try {
            const user = await this.model.findOne({email: userData})
            return user         
        } catch (error) {
            logger.error(error)
        }
    }

}

export {UsersManagerMongo}