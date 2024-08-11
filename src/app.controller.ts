import {
  Controller,
  Get,
  Headers,
  Ip,
  Session,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuardGuard } from './aaa-guard.guard';

@Controller()
@SetMetadata('roles', ['user'])
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AaaGuardGuard)
  @SetMetadata('roles', ['admin'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ccc')
  header(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept, headers);
  }

  @Get('/ip')
  ip(@Ip() ip: string) {
    console.log('ip:', ip);
  }

  @Get('/session')
  session(@Session() session) {
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    return session.count;
  }
}
