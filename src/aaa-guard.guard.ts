import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
@UseGuards(AaaGuardGuard)
export class AaaGuardGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const classMetadata = this.reflector.get('roles', context.getClass());
    const methodMetadata = this.reflector.get('roles', context.getHandler());

    console.log(classMetadata, methodMetadata);
    return true;
  }
}
