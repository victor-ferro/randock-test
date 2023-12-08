import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { InvalidFuelTypeException } from '../errors/invalidFuelType.exception';

@Injectable()
export class QueryValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query' && metadata.data !== 'province' && !value) {
      throw new BadRequestException(
        `Missing query parameter: ${metadata.data}`,
      );
    }

    if (metadata.data === 'fuelType') {
      const transformedValue = this.transformFuelType(value);
      if (!transformedValue) {
        throw new InvalidFuelTypeException(value);
      }
      return transformedValue;
    }

    if (metadata.data === 'postalCode') {
      if (value.length < 5) {
        throw new BadRequestException(
          'Postal code must be at least five characters',
        );
      }
      const province = value.substring(0, 5);
      const parsedValue = await new ParseIntPipe().transform(
        province,
        metadata,
      );
      if (isNaN(parsedValue)) {
        throw new BadRequestException(
          'Invalid value for postal code, first five digits have to be numbers.',
        );
      }
    }

    return value;
  }

  private transformFuelType(value: string): number {
    const lowerCaseValue = value.toLowerCase();
    switch (lowerCaseValue) {
      case 'sp95':
        return 1;
      case 'sp98':
        return 3;
      case 'diesel':
        return 4;
      case 'diesel premium':
        return 5;
      default:
        return null;
    }
  }
}
