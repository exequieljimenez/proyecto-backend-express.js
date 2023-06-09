import dotenv from 'dotenv';
const envFile = process.env.NODE_ENV === 'dev' ? '.env.development' : '.env.production';

dotenv.config({
    path:envFile
});

const options = {
    server:{
        port: process.env.PORT,
        persistence:process.env.PERSISTENCE
    },
    mongo:{
        url: process.env.DB_MONGO_URL
    },
    messages:{
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_EMAIL_PASS
    },
    session:{
        secret: process.env.SECRET_KEY_SESSION
    },
    mode: process.env.MODE || '' 
}



export default options