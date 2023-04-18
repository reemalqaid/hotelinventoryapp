import { Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'GCS-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit {
  @ContentChild(EmployeeComponent) employee!:EmployeeComponent;

  constructor(@Host() private roomsService:RoomsService){}
  ngOnInit(): void {
  }

}
