import { Model, Column, Table } from "sequelize-typescript";

export interface IUser {
  id?: string;
  isAdmin: boolean;
  login: string;
  password: string;
}

@Table
export default class Customer extends Model<IUser> {
  // @PrimaryKey
  // @Column
  // id!: string;

  @Column
  isAdmin!: boolean;

  @Column
  login!: string;

  @Column
  password!: string;
}
