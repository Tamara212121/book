import {sequelize} from "../config/database.js";
import {DataTypes} from "sequelize";

const PublisherModel = sequelize.define('Publisher', {
    publisher_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true,
        }
    }
},{
    tableName: 'publishers',
    timestamps: false
})

export default PublisherModel;