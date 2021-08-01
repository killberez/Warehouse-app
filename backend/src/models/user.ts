import { Model, Column, Table } from "sequelize-typescript";

interface IUser {
  id?: string;
  jwt: string;
  isAdmin: boolean;
}

@Table
export default class Customer extends Model<IUser> {
  // @PrimaryKey
  // @Column
  // id!: string;
  @Column
  jwt!: string;

  @Column
  isAdmin!: boolean;
}
