import { Component, OnInit,Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'GCS-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
 
})
export class EmployeeComponent implements OnInit {
empName:string = 'ريم قايد'

  ngOnInit(): void {
  }

  constructor(private roomsService:RoomsService){}
  

}
