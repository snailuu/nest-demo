import { Controller, Get, Request, Response } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Request() request: FastifyRequest,
    @Response() reply: FastifyReply,
  ) {
    reply.header('url', request.url);
    reply.send('hello');
  }
}
