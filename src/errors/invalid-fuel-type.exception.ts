import { BadRequestException } from '@nestjs/common';

export class InvalidFuelTypeException extends BadRequestException {
  constructor(invalidFuelType: string) {
    super(
      `Invalid value for fuelType. Valid values are: sp95, sp98, diesel y diesel premium. Received: ${invalidFuelType}`,
    );
  }
}
