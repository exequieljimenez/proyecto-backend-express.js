import {usersDao} from '../daos/factory.js'

const addUserService = async (usuario) => {
    await usersDao.addUser(usuario) 
}

const readUserUservice = async (email) => {
    const user = await usersDao.getUser(email)
    return user
}

export {addUserService, readUserUservice}