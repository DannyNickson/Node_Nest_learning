import { DataTypes } from "sequelize";
import { BelongsToMany, Model, Table, Column } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "./../roles/roles.model";
import { UserRoles } from "./../roles/usere-role.model";
interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: "puchkovdd@gmail.com",
    description: "Почтовый адрес",
  })
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  email: string;
  @ApiProperty({ example: "12312314", description: "Пароль пользователя" })
  @Column({ type: DataTypes.STRING, allowNull: false })
  password: string;
  @ApiProperty({ example: "false", description: "Забанен или нет" })
  @Column({ type: DataTypes.BOOLEAN, defaultValue: false })
  banned: boolean;
  @ApiProperty({ example: "null", description: "Причина блокировки" })
  @Column({ type: DataTypes.STRING, allowNull: true })
  banReason: string;
  @BelongsToMany(() => Role, () => UserRoles)
  role: Role[];
}
