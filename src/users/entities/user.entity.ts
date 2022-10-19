import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { Role } from '../role/entities/role.entity';

@Table({ timestamps: true })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @Column
  role_id: number;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column({ type: DataType.JSON })
  config: string;

  @BelongsTo(() => Role, 'role_id')
  roles: Role[];

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
