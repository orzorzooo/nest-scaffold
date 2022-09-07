// import {
//   AllowNull,
//   AutoIncrement,
//   Column,
//   CreatedAt,
//   DataType,
//   Model,
//   PrimaryKey,
//   Table,
//   Unique,
//   UpdatedAt,
// } from 'sequelize-typescript';

// @Table({ timestamps: true })
// export class Property extends Model<Property>  {
// 	@PrimaryKey
//   @AutoIncrement
//   @Column
//   id: number;

// 	@AllowNull(false)
//   @Column
//   name: string;
// }

// @Table({ timestamps: true })
// export class User extends Model<User> {
//   @PrimaryKey
//   @AutoIncrement
//   @Column
//   id: number;

//   @AllowNull(false)
//   @Column
//   name: string;

//   @AllowNull(false)
//   @Unique
//   @Column
//   email: string;

//   @AllowNull(false)
//   @Column
//   password: string;

//   @Column({ defaultValue: true })
//   isActive: boolean;

//   @Column({ type: DataType.JSON })
//   config: string;

//   @CreatedAt
//   created_at: Date;

//   @UpdatedAt
//   @Column
//   updated_at: Date;
// }
