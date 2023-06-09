import {logger} from '../../../loggers/loggers.js'

class ProductManagerMongo {
    constructor(model) {
        this.model = model;
    };

    async guardar(producto) {
        try {
            const largoArray = await this.model.find({})
            let id
            if (largoArray == 0) {
                id = 1
            }
            else {
                id = largoArray.length + 1
            }
            const nuevoProducto = {id: id, ...producto}
            await this.model.create(nuevoProducto)
            return id
        } catch (error) {
            logger.error(error);
        } 
    }

    async getAll() {
        try {
            const listaTodos = await this.model.find({})
            return listaTodos;
            
        } catch (error) {
            logger.error(error);
        }
    }

    async getById(id) {
        try {
            const productoPorId = await this.model.findOne({id: id})
            return productoPorId
        } catch (error) {
            logger.error(error);
        }
    }

    async actualizar(id, data) {
        try {
            await this.model.updateOne({ id: id }, { $set: data})
        } catch (error) {
            logger.error(error)
        }
    }

    async borrar(id) {
        try {
            await this.model.deleteOne({id: id})
        } catch (error) {
            logger.error(error);
        }
    }

    async borrarAll() {
        try {
            await this.model.deleteMany({})
        } catch (error) {
            logger.error(error);
        }
    }

    async filtrarProductos(limit) {
        try {
            const productosFiltrados = await this.model.find({}).sort({nombre: 1}).limit(limit)
            return productosFiltrados
        } catch (error) {
            logger.error(error)
        }
    }

}

export {ProductManagerMongo}