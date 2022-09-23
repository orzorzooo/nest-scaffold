import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
// import { DataTypes } from 'sequelize/types';

@Table({ timestamps: true })
export class Property extends Model<Property> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  category_id: number;

  @Column
  description: string;

  @Column({ type: DataType.JSON })
  spec: object;

  @Column
  price: string;

  @Column({ type: DataType.JSON })
  priceRange: string;

  @Column
  func: string;

  @Column
  area: string;

  @Column
  area_id: number;

  @Column
  address: string;

  @Column
  locate_id: number;

  @Column({ type: DataType.JSON })
  files: object;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
