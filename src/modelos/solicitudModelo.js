import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { mascotas } from "./mascotaModelo.js";
import { adoptante } from "./adoptanteModelo.js";


const solicitud = db.define('solicitud', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    estado: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
  });
  
  // Relaciones
  solicitud.belongsTo(adoptante, { foreignKey: 'adoptante_id' });
  solicitud.belongsTo(mascotas, { foreignKey: 'mascotas_id' });

  export { solicitud }