import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {

  person: Person ={
    name:"bla",surname:"aioa",age:16
  }

  list:Person[] =[
    {name:"livio",surname:"ciao",age:16},
    {name:"yang",surname:"blu",age:16}
  ]
  nome='';
  cognome='';
  eta=0;
  title = 'yang';
  numclick = 0;
  isEdit=false;
  button_name = this.isEdit ? "edit" : "add";
  index=-1;

  buttonDisabled=false;
  clickButton = ($event : any)=>{
    this.numclick++;
    this.title="ciao";
    this.buttonDisabled=true;
    this.list.push(this.person);
  }
  add = ()=>{
    this.list.push({name:this.nome,surname:this.cognome,age:this.eta})
  }
  delete = ($event : any)=>{
    this.list.splice($event,1);
  }
  edit = ($event : any)=>{

    this.nome=this.list[$event].name;
    this.cognome=this.list[$event].surname;
    this.eta=this.list[$event].age;

    this.isEdit=true;
    this.index=$event;
  }
  update = ()=>{
    this.list.splice(this.index,1,{name:this.nome,surname:this.cognome,age:this.eta});
    this.isEdit=false;
    this.clear();
  }
  clear = ()=>{
    this.nome="";
    this.cognome="";
    this.eta=0;
  }
  
}
