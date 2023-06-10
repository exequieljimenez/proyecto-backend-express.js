import express from "express";
import passport from "passport";
import { Strategy } from "passport-local";
import {readUser, verifyPass, getAuthHomeController, getAuthRegisterController, getAuthLoginController, getAuthLoginSuccessController, getAuthLoginErrorController, getAuthLogoutController, postAuthRegisterController} from '../controllers/auth.controllers.js'

const LocalStrategy = Strategy;

const authRouter = express.Router();

authRouter.use(express.json());
authRouter.use(express.urlencoded({extended: true}))

passport.use('loginStrategy', new LocalStrategy(
    {
        usernameField: 'email'
    },
    async function (username, password, done)
    {
        const existeUsuario = await readUser(username)
        if(!existeUsuario) {
            return done(null, false)
        } else {
            const match = await verifyPass(existeUsuario, password)

            if(!match) {
                return done(null, false)
            }
            return done(null, existeUsuario)
        }
    }
))

passport.serializeUser((usuario, done) => {
    done(null, usuario.email)
})

passport.deserializeUser(async (email, done) => {
    const existeUsuario = await readUser(email);
    done(null, existeUsuario)
})

authRouter.use(passport.initialize());
authRouter.use(passport.session())

authRouter.get('/', getAuthHomeController)
authRouter.get('/register', getAuthRegisterController)
authRouter.get('/login', getAuthLoginController)
authRouter.get('/login-success', getAuthLoginSuccessController)
authRouter.get('/login-error', getAuthLoginErrorController)
authRouter.get('/logout', getAuthLogoutController)
authRouter.post('/login', passport.authenticate('loginStrategy', {successRedirect: 'login-success', failureRedirect: 'login-error'}))
authRouter.post('/register', postAuthRegisterController)

export {authRouter};