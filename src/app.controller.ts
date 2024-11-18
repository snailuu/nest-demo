import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLogger } from './MyLogger';
import { WINSTON_LOGGER_TOKEN } from './winston/winston.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(WINSTON_LOGGER_TOKEN)
  private logger;

  @Get()
  getHello(): string {
    this.logger.log('getHello', AppController.name);
    return this.appService.getHello();
  }
}
