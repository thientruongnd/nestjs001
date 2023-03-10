import { Expose, plainToClass } from 'class-transformer';

/**
 * Mr: Xuan Truong
 * Email: truongdx@runsystem.net
 * this name
 */
export class BaseDto {
  @Expose()
  id: number;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
