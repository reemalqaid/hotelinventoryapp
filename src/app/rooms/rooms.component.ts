import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
@Component({
  selector: 'GCS-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})


export class RoomsComponent implements OnInit, AfterViewInit{

  hotel_name= " شيراتون";
  No_rooms = 10;
  hide_rooms = false;
  //interfaces
  rooms: Room = {
    totalRooms: 10,
    availabelRooms:5,
    bookRooms:5
  }

  roomList:RoomList[] = [];

  selectedRoom!: RoomList;
constructor(private roomsService: RoomsService){}



ngOnInit():void{

  this.roomList = this.roomsService.getroom();

}


ngAfterViewInit(): void {
  this.headerComp.title ="هذا العنوان من الهيدر " ;
}

  toggle(){
    this.hide_rooms = !this.hide_rooms;
  }

  selectRoom(room:RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room:RoomList={
      roomNo:4,
      roomType:'جناح',
      amenities:'، إطلالة على الكعبة شاشة تلفزيون، مكيف مركزي، جاكوزي',
      price: 3000,
      checkInTime: new Date('20-Aug-2023'),
      checkOutTime: new Date('01-Sep-2023'),
      photos:"" 
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList,room];
  }
  //it's defiened after init not OnInit
  //static true mean:this component can used on OnInit of it's parent
  @ViewChild(HeaderComponent)headerComp!:HeaderComponent;

 
}
