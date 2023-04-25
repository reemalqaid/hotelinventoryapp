import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor( @Inject(APP_SERVICE_CONFIG) private config:AppConfig) { 
    console.log(this.config.apiEndpoint);
    console.log("Room service created");
  }

  roomList:RoomList[] = [
  {
    roomNo:1,
  roomType:'جناح',
  amenities:'شاشة تلفزيون، مكيف مركزي، جاكوزي',
  price: 2500,
  checkInTime: new Date('20-Aug-2023'),
  checkOutTime: new Date('01-Sep-2023'),
  photos:""
},
{
  roomNo:2,
  roomType:'غرفة',
  amenities:'شاشة تلفزيون،إطلالة على الحرم',
  price: 500,
  checkInTime: new Date('20-Aug-2023'),
  checkOutTime: new Date('01-Sep-2023'),
  photos:""
},
{
  roomNo:3,
  roomType:'جناح',
  amenities:'، إطلالة على الكعبة شاشة تلفزيون، مكيف مركزي، جاكوزي',
  price: 3000,
  checkInTime: new Date('20-Aug-2023'),
  checkOutTime: new Date('01-Sep-2023'),
  photos:""  
},

]


getroom(){
  return this.roomList;
}
}
