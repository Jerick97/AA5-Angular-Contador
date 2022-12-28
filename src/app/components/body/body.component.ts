import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  numero : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  incrementar(){
    this.numero++;
  }
  decrementar(){
    if(this.numero > 0){
      this.numero--;
    }
    
  }
}
