import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional } from 'sequelize';
import db from '.';

class ModelTeam extends Model<InferAttributes<ModelTeam>,
InferCreationAttributes<ModelTeam>> {
  declare id: CreationOptional<number>;
  declare teamName: string;
}

ModelTeam.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default ModelTeam;
