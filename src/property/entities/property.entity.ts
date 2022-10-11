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
  Comment,
} from 'sequelize-typescript';
// import { DataTypes } from 'sequelize/types';

@Table({ timestamps: true })
export class Property extends Model<Property> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Comment('地址')
  @Column
  address: string;

  @Comment('區域')
  @Column
  area: string;

  @Comment('空間類型')
  @Column
  space_type: string;

  @Comment('建物類型')
  @Column
  building_type: string;

  @Comment('建物樓層')
  @Column
  building_floors: string;

  @Comment('所在樓層')
  @Column
  floors: string;

  @Comment('幾房')
  @Column
  rooms: number;

  @Comment('幾廳')
  @Column
  halls: number;

  @Comment('幾衛')
  @Column
  bathrooms: number;

  @Comment('幾陽台')
  @Column
  balconies: number;

  @Comment('幾廚房')
  @Column
  kitchens: number;

  @Comment('坪數')
  @Column
  square_meter: number;

  @Column
  owner_role: string;

  @Column
  line_id: string;

  @Column
  cell_phone: string;

  @Column
  phone: string;

  @Comment('車位:null,car,bike')
  @Column
  parking_space: string; //車位 null:沒車位, car, bike,

  @Comment('限男 null, male, female')
  @Column
  gender_condition: string; // null, male, female

  @Comment('產權登記')
  @Column
  property_right: string; //產權登記

  @Comment('建物面積')
  @Column
  building_square_meter: number; //建物面積

  @Comment('法定用途')
  @Column
  use_for: string; //法定用途

  @Comment('最短租期')
  @Column
  lease_term: string; //最短租期

  @Comment('租金')
  @Column
  rent_price: number; //租金

  @Comment('押金')
  @Column
  deposit: number; //押金

  @Comment('管理費')
  @Column
  management_fee: number; //管理費

  @Comment('名稱(建案名)')
  @Column
  name: string;

  @Comment('標題')
  @Column
  title: string;

  @Comment('內容')
  @Column
  description: string;

  @Comment('圖檔')
  @Column({ type: DataType.JSON })
  files: string;

  @Comment('特色')
  @Column({ type: DataType.JSON })
  features: string; //特色

  @Comment('傢俱硬體')
  @Column({ type: DataType.JSON })
  hardwares: string; //傢俱設備

  @Comment('功能')
  @Column
  func: string;

  @Comment('特點規格')
  @Column({ type: DataType.JSON })
  spec: string; //

  @Comment('狀態')
  @Column
  status: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}
