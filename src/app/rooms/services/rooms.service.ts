import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { 
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
