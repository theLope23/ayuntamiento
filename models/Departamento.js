import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Departamento = db.define('departamentos', {
    nombre:{
        type:DataTypes.STRING(30),
        allowNull:false
    }
});

export default Departamento