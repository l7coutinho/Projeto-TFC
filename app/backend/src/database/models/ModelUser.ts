import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional } from 'sequelize';
import db from '.';

class ModelUser extends Model<InferAttributes<ModelUser>,
InferCreationAttributes<ModelUser>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

ModelUser.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default ModelUser;
