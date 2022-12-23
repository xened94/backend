import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('Producto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    },
    Categoria:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    }
}, 
{
    createdAt: false,
    updatedAt: false
});

export default Producto;