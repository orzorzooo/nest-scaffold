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

@Table({ timestamps: true })
export class File extends Model<File> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(true)
  @Column
  name: string;

  @AllowNull(true)
  @Column
  description: string;

  @AllowNull(true)
  @Column
  mimetype: string;

  @Column
  fileable_id: number;

  @Column
  type: string;

  @Column
  url: string;

  @AllowNull(true)
  @Column
  user_id: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
