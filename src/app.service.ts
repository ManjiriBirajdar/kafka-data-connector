import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { BatteryService, OPCUAService } from './models/dtos/index.dto';
import { DIPWrapperService } from './services/dip-wrapper-service';

@Injectable()
export class AppService {

  //function: When a new battery comes into the process, it will be announced on Topic 5155 (BatteryService). 
  handleCreateBattery(BatteryService: BatteryService) {
   console.log("BatteryService = ", BatteryService);

   //scanity checks

   //buisness logic + data pre processing

   //call dip - DIP wrapper
    const dipservice = new DIPWrapperService();

    dipservice.login();


    //wait for answer from DIP 201 accepted
      //fetch data every 5 secs
        //get tx and send back to ascon
  }
  
  handleOPCUAService(OPCUAService: OPCUAService){
    console.log("OPCUAService = ", OPCUAService);
  }

  sendTransactionID(){
    //get transaction id for the tx and write back to ascon
    console.log(" = ", );
  }
}
