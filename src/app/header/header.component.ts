import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'GCS-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
title: string = '';

  ngOnInit(): void {
  }

}
