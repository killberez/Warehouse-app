import { Model, Column, Table } from "sequelize-typescript";

export interface IUser {
  id?: string;
  isAdmin: boolean;
}

@Table
export default class Customer extends Model<IUser> {
  // @PrimaryKey
  // @Column
  // id!: string;

  @Column
  isAdmin!: boolean;
}
