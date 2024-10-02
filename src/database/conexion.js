import Sequelize  from "sequelize";

const db = new Sequelize("mi_amigo_fiel","mascotas","mascotas2024",{
    dialect: "mysql",
    host: "localhost"
});

export {db}