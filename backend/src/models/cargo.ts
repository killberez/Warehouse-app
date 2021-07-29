import { Model, Column, Table, IsUUID, Default } from "sequelize-typescript";
import Sequelize from "sequelize";

interface ICargo {
  id?: string;
  uuid: string;
  customerId: number;
  totalWeight: number;
  totalVolume: number;
  numberOfBoxes: number;
  condition: string;
  warehousePlace: string;
}

@Table
export default class Cargo extends Model<ICargo> {
  @IsUUID(4)
  @Default(Sequelize.UUIDV4)
  @Column
  uuid!: string;

  @Column
  customerId!: number;

  @Column
  totalWeight!: number;

  @Column
  totalVolume!: number;

  @Column
  numberOfBoxes!: number;

  @Column
  condition!: string;

  @Column
  warehousePlace!: string;
}
