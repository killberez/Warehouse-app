import { Model, Column, Table, PrimaryKey } from "sequelize-typescript";

interface ICustomer {
  id: string;
  isAdmin: boolean;
}

@Table
export default class Customer extends Model<ICustomer> {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  isAdmin!: boolean;
}
