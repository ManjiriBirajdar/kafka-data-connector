import {
  IsDefined,
  IsNotEmpty,
  IsAlphanumeric,
  Max,
  Min,
  IsInt,
  ValidateIf,
  IsArray,
  IsOptional,
} from 'class-validator'
import {} from '@nestjs/common'
import { Transform } from 'class-transformer'

export class BatteryService {
  @IsDefined()
  @IsNotEmpty()
  batteryID: string
}

export class OPCUAService{
  
}
