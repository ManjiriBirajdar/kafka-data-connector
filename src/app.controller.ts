import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

import * as topics from "./topics.json";

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
  ) {}

  //Listen to new incoming batteries
  @EventPattern(topics.BatteryService.BatteryService)
  handleCreateBattery(data: any) {
    this.appService.handleCreateBattery(data.value);
  }

  @EventPattern(topics.OPCUADataPoints.OPCUAService)
  handleOPCUAService(data: any) {
    this.appService.handleOPCUAService(data.value);
  }

  @EventPattern(topics.BatteryService.transactionID)
  sendTransactionID(){
    this.appService.sendTransactionID();
  }


  onModuleInit() {
    // this.authClient.subscribeToResponseOf('get_user');
  }
}
