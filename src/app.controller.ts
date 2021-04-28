import { AppService } from './app.service';
import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import {Request} from 'express';

@Controller()
export class AppController {
  users = ['Fattouma', 'Hamdouni', 'IngSI2', 'Mr Aymen Sellouati'];
@Get('users')
  getUsers(
@Req() request: Request
): string[] {
    console.log(request);
    return this.users;
  }

  @Get('user/first')
  getFirstUser(): string {
    return this.users[0];
}
  @Post('newUser')
  addUser(@Query('name') name): string {
    console.log(name);
    this.users.push(name);
    return name;
}

}
