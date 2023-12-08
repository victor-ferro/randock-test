import { HttpException, HttpStatus } from '@nestjs/common';

export class EmptyResponseException extends HttpException {
  constructor(cp: string) {
    const message = `No gas stations found for postal code ${cp}.`;
    super(message, HttpStatus.NOT_FOUND);
  }
}
