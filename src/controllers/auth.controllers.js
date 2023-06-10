import bcrypt from 'bcrypt';
import {addUserService, readUserUservice} from '../services/auth.services.js'

async function addUser(usuario) {
    await addUserService(usuario)
   
}

async function readUser(email) {
    const user = await readUserUservice(email)
    return user
}

async function generateHashPassword(password) {
    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword
}

async function verifyPass(usuario, password) {
    const match = await bcrypt.compare(password, usuario.password)
    return match
}

const getAuthHomeController = async (req, res) => {
    res.redirect('/api/auth/login')
}

const getAuthRegisterController = async (req, res) => {
    res.send('Escriba sus datos para registrarse')
}

const getAuthLoginController = async (req, res) => {
    res.send('Escriba email y password')
}

const getAuthLoginSuccessController = async (req, res) => {
    const user = {
        nombre: req.user.nombre,
        telefono: req.user.celular,
        avatar: req.user.avatar
    }
    res.send(`Usted inicio sesion ${JSON.stringify(user)}`)
}

const getAuthLoginErrorController = async (req, res) => {
    res.send('Usuario o contrasena incorrectos')
}

const getAuthLogoutController = async (req, res) => {
    const sesionActiva = req.session
    if (sesionActiva.passport) {
        req.session.destroy(err => {
            if (err) {
                throw err
            }
            res.send('Sesion finalizada')
        })
    } else {
        res.send('No ha iniciado sesion aun')
    }
}

const postAuthRegisterController = async (req, res) => {
    const sesionActiva = req.session
    if (sesionActiva.passport) {
        res.send('Debe desloguearse para registrar un nuevo usuario')
    } else {
        const { email, password, nombre, direccion, edad, celular, avatar } = req.body;
        const newUsuario = await readUserUservice(email)
        if (newUsuario) {
            res.send('Usuario ya existente')
        } else {
            const newUser = { email, password: await generateHashPassword(password), nombre, direccion, edad, celular, avatar }
            addUserService(newUser)
            res.send('usuario agregado\ningrese a login y escriba el email y contrasena con los que se registro para loguearse')
        }
    }
}

export {readUser, addUser, generateHashPassword, verifyPass, getAuthHomeController, getAuthRegisterController, getAuthLoginController, getAuthLoginSuccessController, getAuthLoginErrorController, getAuthLogoutController, postAuthRegisterController}