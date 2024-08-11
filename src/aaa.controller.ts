import {
  Controller,
  Get,
  HostParam,
  HttpCode,
  Render,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class AaaController {
  @Get('bbb')
  hello(@HostParam('host') host) {
    return host;
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
  }

  @Get('fff')
  @HttpCode(222)
  fff() {
    return 'hello';
  }

  @Get('user')
  @Render('user')
  user() {
    return { name: 'guang', age: 20 };
  }
}
