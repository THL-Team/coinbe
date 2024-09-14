import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
  InternalServerErrorException,
} from '@nestjs/common';
import { ExampleService } from '@src/alpha/example/example.service';
import { CreateExampleDto } from '@src/alpha/example/dto/create-example.dto';
import { UpdateExampleDto } from '@src/alpha/example/dto/update-example.dto';
import { Response } from 'express';
import puppeteer from 'puppeteer';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  create(@Body() createExampleDto: CreateExampleDto) {
    return this.exampleService.create(createExampleDto);
  }

  @Get('/testt')
  async convertToBase64() {
    return 'ok test success';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exampleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExampleDto: UpdateExampleDto) {
    return this.exampleService.update(+id, updateExampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleService.remove(+id);
  }
}
