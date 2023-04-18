import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'GCS-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{


  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }

  @Input() rooms: RoomList[] = [];
  @Input() title: String = "";
  @Output() selectedRoom = new EventEmitter<RoomList>();

  construction(){}

  

  ngOnInit(): void {
    
  }
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);

  }
}
