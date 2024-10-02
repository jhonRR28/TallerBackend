import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";


const mascotas = db.define("mascotas",{
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true  
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  sexo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  fechaIngreso: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },  
});

export {mascotas}