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
export class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @Column
  description: string;

  @Column
  company_id: number;

  @Column
  company_name: string;

  @Column
  brand: string;

  @Column
  category_name: string;

  @Column
  category_id: number;

  @Column
  locate_id: number;

  @Column
  locate_name: string;

  @Default(0)
  @Comment('進價')
  @Column
  purchase_price: number;

  @Default(0)
  @Comment('售價')
  @Column
  sell_price: number;

  @Default(0)
  @Column
  price: number;

  @Column({ type: DataType.JSON })
  files: object;

  @Column({ type: DataType.JSON })
  specs: object;

  @Comment('0:停用, 1:可銷售')
  @Column
  status: number;

  @Column
  create_by: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
