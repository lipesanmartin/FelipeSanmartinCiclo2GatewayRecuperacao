import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Cliente } from './interface/cliente';

@Controller()
export class AppController {

  private clienteAdminBackend: ClientProxy

  constructor() {
    this.clienteAdminBackend = ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
    urls: ['amqp://admin:123456@10.136.62.143:5672/seguro'],
    queue: 'fila-seguro'
    }
    })
    }
    
  @Get()
  getHello() {
    return this.clienteAdminBackend.emit('criar-microservico', 'ola mundo microservico') ;
  }

  @Post()
  postCliente(@Body() dto: Cliente) {
    return this.clienteAdminBackend.emit('criar-cliente', dto) ;
  }
}
