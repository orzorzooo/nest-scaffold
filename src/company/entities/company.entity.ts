import {
  AllowNull,
  AutoIncrement,
  Column,
  Comment,
  CreatedAt,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ timestamps: true })
export class Company extends Model<Company> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  phone: string;

  @Column
  email: string;

  @Column
  address: string;

  @Column
  description: string;

  @Column
  user_id: string;

  @Column
  locate_id: string;

  @Column
  profile_id: string;

  @Column
  tag_id: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
