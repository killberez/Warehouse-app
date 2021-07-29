import { Model, Column, Table, PrimaryKey } from "sequelize-typescript";

interface IWorker {
  id: string;
  isAdmin: boolean;
}

@Table
export default class Worker extends Model<IWorker> {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  isAdmin!: boolean;
}
