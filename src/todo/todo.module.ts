import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { EnumsDirective } from './enums.directive';

@Module({
  controllers: [TodoController],
   declarations: [
    "EnumsDirective"
  ]
})
export class TodoModule {}
