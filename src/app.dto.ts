import { IsString, IsNotEmpty } from 'class-validator';

export class ReqDTO {
  @IsNotEmpty()
  @IsString()
  text!: string;
}
