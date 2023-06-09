import mongoose from 'mongoose';

const carritosCollection = 'carritos';

const carritoSchema = new mongoose.Schema({
    email: {type: String},
    productos: {type: [], require: true}
})

const CarritoModel = mongoose.model(carritosCollection, carritoSchema);

export {CarritoModel}