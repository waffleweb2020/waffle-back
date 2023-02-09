import {Column, Model, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";

@Table({tableName:'user'})
export class UserModel extends Model {
    @Column({type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataTypes.STRING})
    name: string

    @Column({type: DataTypes.STRING, allowNull: true})
    number: string

    @Column({type: DataTypes.STRING, allowNull: true})
    email: string

    @Column({type: DataTypes.STRING})
    comment: string

}