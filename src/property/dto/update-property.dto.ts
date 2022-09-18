import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './create-property.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  address: string;
}
