import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.checkMessageExists(id);
    return this.messagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    this.checkMessageExists(id);

    return this.messagesService.update(id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.checkMessageExists(id);
    return this.messagesService.remove(id);
  }

  checkMessageExists(id: string) {
    const message = this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
  }
}
