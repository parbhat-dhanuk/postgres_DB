import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(process.env.CONNECTION_STRING as string)

try {
    sequelize.authenticate()
    .then(()=>{
        console.log("Database connected successfully.")
    })
    .catch((err)=>{
       console.log("error in Database connection.",err)
    })
} catch (error) {
    console.log(error)
}

export default sequelize