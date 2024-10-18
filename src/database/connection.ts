import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(process.env.CONNECTION_STRING as string,{
    models:[__dirname + '/models']
})



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

sequelize.sync({force : false}).then(()=>{
    console.log("Table migrates to database successfully")
})

export default sequelize