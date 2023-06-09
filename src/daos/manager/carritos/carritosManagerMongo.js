import {logger} from '../../../loggers/loggers.js'

class CarritosManagerMongo {
    constructor(model){
        this.model = model
    }
    async crearCarrito(email) {
    try {
        await this.model.create({email: email})
    } catch (error) {
        logger.error(error)
    }
}

async agregarProducto(email, carrito) {
    try {
        await this.model.updateOne({ email: email }, { $set: carrito})
    } catch (error) {
        logger.error(error)
    }
}

async deleteProduct(email, minusOneCart) {
    try {
        await this.model.findOneAndUpdate({email: email}, { productos: minusOneCart })
    } catch (error) {
        logger.error(error)
    }
}

async getCart(email) {
    try {
        const carrito = await this.model.findOne({email: email})
        return carrito
    } catch (error) {
        logger.error(error)
    }
}

async borrarCarrito(email) {
    try {
        await this.model.deleteOne({email: email})
    } catch (error) {
        logger.error(error)
    }
}}

export {CarritosManagerMongo}