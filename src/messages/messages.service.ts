import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

  create(createMessageDto: CreateMessageDto) {
    return this.messagesRepository.create(createMessageDto.text);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  update(id: string, updateMessageDto: UpdateMessageDto) {
    return this.messagesRepository.update(id, updateMessageDto.text);
  }

  remove(id: string) {
    return this.messagesRepository.remove(id);
  }
}
