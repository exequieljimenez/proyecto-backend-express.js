import mongoose from "mongoose";

const userCollection = 'usuarios';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    nombre:{
        type:String,
        required: true
    },
    direccion:{
        type: String
    },
    edad: {
        type: Number,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
})

const UserModel = mongoose.model(userCollection, userSchema);

export {UserModel}