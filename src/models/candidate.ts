import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from 'bcrypt'


type checkPasswordCallback =  (err: Error | undefined, isSame: boolean) =>void
export interface Candidate {
  id: number;
  name: string;
  bio: string;
  email: string;
  phone: string;
  openToWork: boolean;
  birth: Date;
  password: string;
  curriculum: string;
  role: 'admin' | 'user'
}

export interface CandidateCreationAttributes
  extends Optional<Candidate, 'id'> {}

export interface CandidateInstance
  extends Model<Candidate, CandidateCreationAttributes>, Candidate {
    checkPassword:(password: string, callbackfn:checkPasswordCallback) =>void
  }

const Candidate = sequelize.define<CandidateInstance,Candidate>(
  "candidates",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    birth: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    curriculum: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    bio: DataTypes.TEXT,
    phone: DataTypes.STRING,
    openToWork: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed("password")) {
          user.password = await bcrypt.hash(user.password.toString(), 10);
        }
      },
    },
  }
);

Candidate.prototype.checkPassword = function (password: string, callbackfn:checkPasswordCallback) {
    bcrypt.compare(password, this.password, (err, isSame) => {
      if (err) {
        callbackfn(err, false)
      } else {
        callbackfn(err, isSame)
      }
    })
}
export { Candidate };
