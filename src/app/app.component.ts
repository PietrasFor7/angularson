import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Rzecz } from './Rzecz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekcik';
 button2:boolean=true;
 button:boolean=false;
 formularz:boolean=false;
 wpisane:string="";
 wpisane2:string="";
 pokazane:boolean=false;
Zrobione:boolean=false;
show():void{
  this.pokazane=true;
  this.table=true;
}
Rzeczy:Rzecz[]=
[
new Rzecz("wyjsc na spacer","2022.05.13",false)

]
wyswietl():void{
  this.Rzeczy.push(new Rzecz(this.wpisane,this.wpisane2,false)),
  this.formularz=false;
  this.button2=true;
  console.log(this.wpisane2)
}
show2():void{
this.formularz=true;
this.button2=false;
}
table:boolean=false;
delete():void{
 // this.Rzeczy = this.Rzeczy.filter(Rzecz => Rzecz.element !== Rzecz.element);
 this.Rzeczy.splice(this.Rzeczy.length-3,3)
}
}

