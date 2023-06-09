import mongoose from 'mongoose';

const productCollection = 'productos';

const productsSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    nombre: { type: String, require: true },
    precio: { type: Number, require: true },
    imagen: { type: String, require: true }
})

const ProductModel = mongoose.model(productCollection, productsSchema);

export {ProductModel}