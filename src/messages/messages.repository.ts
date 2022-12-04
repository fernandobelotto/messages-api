import { Message } from './entities/message.entity';
import { v4 as uuid } from 'uuid';
import { NotFoundException } from '@nestjs/common';

export class MessagesRepository {
  private messages: Message[] = [];

  findAll(): Message[] {
    return this.messages;
  }

  create(text: string): Message {
    const message = {
      id: uuid(),
      text,
    };
    this.messages.push(message);
    return message;
  }

  findOne(id: string): Message {
    return this.messages.find((message) => message.id === id);
  }

  update(id: string, text: string): Message {
    const message = this.findOne(id);
    message.text = text;
    return message;
  }

  remove(id: string): void {
    this.messages = this.messages.filter((message) => message.id !== id);
  }
}
