import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';

export const Aaa = (...args: string[]) => SetMetadata('aaa', args);

export const MyHeaders = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return key ? request.headers[key.toLowerCase()] : request.headers;
  },
);
