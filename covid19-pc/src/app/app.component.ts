import { Component } from '@angular/core';
import {CoronaService} from './corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19';

  fInfo;
  constructor(private cor:CoronaService){}
  ngOnInit():void{
    this.cor.fetchCoronaInfo()
    .subscribe(res=>{
      console.log(res);
      this.fInfo=res;
    })
  }
}
