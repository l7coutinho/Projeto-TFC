import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import ModelTeam from './ModelTeam';

class ModelMatch extends Model<
InferAttributes<ModelMatch>,
InferCreationAttributes<ModelMatch>
> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
  declare homeTeam?: ModelTeam;
  declare awayTeam?: ModelTeam;
}

ModelMatch.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

ModelTeam.hasMany(ModelMatch, { foreignKey: 'homeTeamId', as: 'homeMatches' });
ModelTeam.hasMany(ModelMatch, { foreignKey: 'awayTeamId', as: 'awayMatches' });
ModelMatch.belongsTo(ModelTeam, { foreignKey: 'homeTeamId', as: 'homeTeam' });
ModelMatch.belongsTo(ModelTeam, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default ModelMatch;
